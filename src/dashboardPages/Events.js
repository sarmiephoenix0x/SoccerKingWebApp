import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import EventCard from '../Components/EventCard';
import CustomDialog from '../Components/CustomDialog';
import { useSnackbar } from 'notistack';
import { Tab, Tabs, Modal, Button, TextField, Select, MenuItem, Box } from '@mui/material';
import plusImg from "../images/PlusButton.png";
import { useNavigate, useLocation } from 'react-router-dom';

const EventsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [events, setEvents] = useState([]);
    const [airdrops, setAirdrops] = useState([]);
    const [loadingEvents, setLoadingEvents] = useState(false);
    const [loadingAirdrops, setLoadingAirdrops] = useState(true);
    const [currentPageEvents, setCurrentPageEvents] = useState(1);
    const [currentPageAirdrops, setCurrentPageAirdrops] = useState(1);
    const [isLastPageEvents, setIsLastPageEvents] = useState(false);
    const [isLastPageAirdrops, setIsLastPageAirdrops] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [dialogMessage, setDialogMessage] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [popupOpen, setPopupOpen] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [selectedCoin, setSelectedCoin] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [sourceUrl, setSourceUrl] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (tabIndex === 0) {
            fetchAirdrops('airdrop');
        } else {
            fetchEvents();
        }
    }, [tabIndex]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loadingEvents || isLastPageEvents) return;
            fetchEvents(true); // Load more events
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadingEvents, isLastPageEvents]);


    const fetchAirdrops = async (type) => {
        setLoadingAirdrops(true);
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get(`https://signal.payguru.com.ng/api/event/sort?category=${type}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                const data = response.data;
                setAirdrops(data.data || data); // Adjust based on response structure
                setIsLastPageAirdrops(data.pagination?.isLastPage || true);
            } else {
                handleErrorResponse(response);
            }
        } catch (error) {
            handleFetchError(error, 'Failed to load airdrops');
        } finally {
            setLoadingAirdrops(false);
        }
    };

    const fetchEvents = async (loadMore = false) => {
        if (loadMore && isLastPageEvents) return;

        if (!loadMore) {
            setLoadingEvents(true);
        }

        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get(`https://signal.payguru.com.ng/api/events?page=${currentPageEvents}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;

            if (data && data.data) {
                setEvents(prevEvents => loadMore ? [...prevEvents, ...data.data] : data.data);
                setIsLastPageEvents(data.pagination.isLastPage);
                if (!data.pagination.isLastPage) {
                    setCurrentPageEvents(prev => prev + 1);
                }
            } else {
                throw new Error('Invalid response structure');
            }
        } catch (error) {
            handleFetchError(error, 'Failed to load events');
        } finally {
            if (!loadMore) {
                setLoadingEvents(false);
            }
        }
    };

    const handleFetchError = (error, defaultMessage) => {
        const errorMessage = error.response?.data?.message || error.message || defaultMessage;
        enqueueSnackbar(errorMessage, { variant: 'error' });
        console.error('Fetch error:', error);
    };

    const handleErrorResponse = (response) => {
        if (response.status === 401) {
            throw new Error('Unauthorized access');
        } else if (response.status === 404) {
            throw new Error('No data available');
        } else if (response.status === 422) {
            const errorMessage = response.data.message || 'Validation error occurred';
            throw new Error(`Validation error: ${errorMessage}`);
        } else {
            throw new Error(`Failed to load data: ${response.status}`);
        }
    };

    const performSearch = async (query) => {
        setSearchLoading(true);
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get(`https://signal.payguru.com.ng/api/search?query=${query}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setSearchResults(response.data);
        } catch (error) {
            enqueueSnackbar('Failed to search events', { variant: 'error' });
        } finally {
            setSearchLoading(false);
        }
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
        setCurrentPageEvents(1); // Reset current page for events
        setEvents([]); // Clear events on tab change
        if (newValue === 0) {
            fetchAirdrops('airdrop'); // Fetch airdrops when switching to the first tab
        }
    };

    const handleVote = async (type, eventId) => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            const response = await axios.post('https://signal.payguru.com.ng/api/vote', {
                type,
                group: 'event',
                id: eventId,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                setEvents(prevEvents => {
                    return prevEvents.map(event => {
                        if (event.id === eventId) {
                            return {
                                ...event,
                                upvotes: type === 'upvote' ? event.upvotes + 1 : event.upvotes,
                                downvotes: type === 'downvote' ? event.downvotes + 1 : event.downvotes,
                            };
                        }
                        return event;
                    });
                });
                enqueueSnackbar(`Successfully ${type === 'upvote' ? 'upvoted' : 'downvoted'}.`, { variant: 'success' });
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
            console.error('Error voting:', errorMessage);
        }
    };

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
        // Reset form fields
        setEventTitle('');
        setEventDate('');
        setSelectedCoin('');
        setEventCategory('');
        setEventDescription('');
        setSourceUrl('');
    };


    const handleSubmit = async () => {
        // Handle form submission to add an event
        // Here you would typically send the data to your backend
        console.log({
            eventTitle,
            eventDate,
            selectedCoin,
            eventCategory,
            eventDescription,
            sourceUrl,
        });
        enqueueSnackbar('Event added successfully!', { variant: 'success' });
        handleClosePopup();
    };

    const GoToEventDetails = (event) => {
        document.body.style.overflowY = 'auto';
        navigate("/DashBoard/EventDetails", { state: { event } });
        document.getElementById("DashBoardText2").innerHTML = "BITCOIN";
        document.getElementById("CurrentNavText2").innerHTML = "Home - Events";
    };

    return (
        <div className="events-page">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <SearchBar onSearch={performSearch} style={{ flexGrow: 1, marginRight: '10px' }} />
                <div>
                    <img
                        src={plusImg}
                        alt="Add Event"
                        onClick={handleOpenPopup}
                        style={{ cursor: 'pointer', height: 50 }}
                    />
                </div>
            </div>

            <Box sx={{ width: '100%', marginBottom: 2 }}>
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Airdrops" sx={{ color: tabIndex === 0 ? 'primary.main' : 'white' }} />
                    <Tab label="Trending" sx={{ color: tabIndex === 1 ? 'primary.main' : 'white' }} />
                    <Tab label="Hot" sx={{ color: tabIndex === 2 ? 'primary.main' : 'white' }} />
                </Tabs>
            </Box>

            {loadingAirdrops ? (
                <p>Loading airdrops...</p>
            ) : (
                <div>
                    {tabIndex === 0 && airdrops.map(airdrop => (
                        <EventCard
                            key={airdrop.id}
                            event={airdrop}
                            onClick={() => GoToEventDetails(airdrop)}
                            onVote={handleVote}
                        />
                    ))}
                    {tabIndex !== 0 && loadingEvents ? (
                        <p>Loading events...</p>
                    ) : (
                        tabIndex !== 0 && events.map(event => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onClick={() => GoToEventDetails(event)}
                                onVote={handleVote}
                            />
                        ))
                    )}
                </div>
            )}

            {/* {dialogMessage && (
                <CustomDialog message={dialogMessage} onClose={() => setDialogMessage(null)} />
            )} */}

            {/* Popup for adding an event */}
            <Modal
                open={popupOpen}
                onClose={handleClosePopup}
                aria-labelledby="add-event-title"
                aria-describedby="add-event-description"
            >
                <Box sx={{ padding: 2, backgroundColor: '#0D222B', color: 'white', borderRadius: 2, boxShadow: 3 }}>
                    <h2 id="add-event-title">Add Event</h2>
                    <TextField
                        label="Event Title"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: { color: 'white' }, // Set text color to white
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Set outline color to white
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white', // Set outline color on hover to white
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white', // Set outline color when focused to white
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Date"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: { color: 'white' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />
                    <Select
                        value={selectedCoin}
                        onChange={(e) => setSelectedCoin(e.target.value)}
                        displayEmpty
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiSelect-select': {
                                color: 'white', // Set text color to white
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Set outline color to white
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    >
                        <MenuItem value="" disabled>Select Coin</MenuItem>
                        <MenuItem value="coin1">Coin 1</MenuItem>
                        <MenuItem value="coin2">Coin 2</MenuItem>
                        {/* Add more coins as needed */}
                    </Select>
                    <Select
                        value={eventCategory}
                        onChange={(e) => setEventCategory(e.target.value)}
                        displayEmpty
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiSelect-select': {
                                color: 'white', // Set text color to white
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white', // Set outline color to white
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    >
                        <MenuItem value="" disabled>Select Category</MenuItem>
                        <MenuItem value="category1">Category 1</MenuItem>
                        <MenuItem value="category2">Category 2</MenuItem>
                        {/* Add more categories as needed */}
                    </Select>
                    <TextField
                        label="Description"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        InputProps={{
                            style: { color: 'white' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Source URL"
                        value={sourceUrl}
                        onChange={(e) => setSourceUrl(e.target.value)}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style: { color: 'white' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth
                        sx={{
                            backgroundColor: '#1A1A1A', // Darker background color
                            color: 'white', // White text color
                            '&:hover': {
                                backgroundColor: '#333333', // Darker shade on hover
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default EventsPage;