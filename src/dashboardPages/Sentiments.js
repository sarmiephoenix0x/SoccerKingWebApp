import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import SentimentCard from '../Components/SentimentCard';
import { useSnackbar } from 'notistack';
import { Tab, Tabs, Modal, Button, TextField, Select, MenuItem, Box, CircularProgress, Typography } from '@mui/material';
import filterImg from "../images/FilterButton.png";

const Sentiments = () => {
    const [sentiments, setSentiments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [errorMessage, setErrorMessage] = useState(null);
    const { enqueueSnackbar } = useSnackbar();
    const [tabIndex, setTabIndex] = useState(0);
    const [popupOpen, setPopupOpen] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [selectedCoin, setSelectedCoin] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [sourceUrl, setSourceUrl] = useState('');
    const observer = useRef();

    useEffect(() => {
        fetchSentiments();
    }, [tabIndex]); // Fetch sentiments when the tab changes

    const fetchSentiments = async (loadMore = false) => {
        if (loadMore && isLastPage) return;

        if (!loadMore) {
            setLoading(true);
            setErrorMessage(null);
        }

        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get(`https://signal.payguru.com.ng/api/sentiments?page=${currentPage}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                const data = response.data.data;
                setSentiments(prevSentiments => loadMore ? [...prevSentiments, ...data] : data);
                setIsLastPage(response.data.pagination.next_page_url == null);
                if (!isLastPage) setCurrentPage(prev => prev + 1);
            } else {
                handleFetchError(response);
            }
        } catch (error) {
            handleFetchError(error);
        } finally {
            if (!loadMore) setLoading(false);
        }
    };

    const handleFetchError = (error) => {
        const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
        enqueueSnackbar(errorMessage, { variant: 'error' });
        setErrorMessage(errorMessage);
        setLoading(false);
    };

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };


    const handleClosePopup = () => {
        setPopupOpen(false);
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
        enqueueSnackbar('Filter added successfully!', { variant: 'success' });
        handleClosePopup();
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
        // Reset pagination and sentiments when changing tabs
        setCurrentPage(1);
        setSentiments([]);
        setIsLastPage(false);
        fetchSentiments(); // Fetch sentiments for the new tab
    };

    // Intersection Observer callback
    const lastSentimentElementRef = useRef();
    useEffect(() => {
        const observerCallback = (entries) => {
            if (entries[0].isIntersecting && !loading) {
                fetchSentiments(true); // Load more sentiments
            }
        };

        const currentObserver = observer.current;
        if (currentObserver) {
            currentObserver.disconnect();
        }

        observer.current = new IntersectionObserver(observerCallback);
        if (lastSentimentElementRef.current) {
            observer.current.observe(lastSentimentElementRef.current);
        }

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [loading, sentiments]);

    return (
        <div className="sentiments-page">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <SearchBar onSearch={() => { }} style={{ flexGrow: 1, marginRight: '10px' }} />
                <img
                    src={filterImg}
                    alt="Add Sentiment"
                    onClick={handleOpenPopup}
                    style={{ cursor: 'pointer', height: 50 }}
                />
            </div>
 <Box sx={{ width: '100%', marginBottom: 2 }}>
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Crypto" sx={{ color: tabIndex === 0 ? 'white' : 'grey.500' }} />
                    <Tab label="Forex" sx={{ color: tabIndex === 1 ? 'white' : 'grey.500' }} />
                    <Tab label="Stocks" sx={{ color: tabIndex === 2 ? 'white' : 'grey.500' }} />
                </Tabs>
            </Box>
            <Box sx={{ margin: 2 }}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <div>
                        {sentiments.length > 0 ? (
                            sentiments.map((sentiment, index) => {
                                const isLastSentiment = index === sentiments.length - 1;
                                return (
                                    <div ref={isLastSentiment ? lastSentimentElementRef : null} key={sentiment.id}>
                                        <SentimentCard sentiment={sentiment} />
                                    </div>
                                );
                            })
                        ) : (
                            <Typography variant="h6" color="textSecondary">
                                No sentiments available.
                            </Typography>
                        )}
                    </div>
                )}
            </Box>

            {errorMessage && (
                <Typography variant="body2" color="error">
                    {errorMessage}
                </Typography>
            )}

<Modal
                open={popupOpen}
                onClose={handleClosePopup}
                aria-labelledby="add-event-title"
                aria-describedby="add-event-description"
            >
                <Box sx={{ padding: 2, backgroundColor: '#0D222B', color: 'white', borderRadius: 2, boxShadow: 3 }}>
                    <h2 id="add-event-title">Filter</h2>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    /><TextField
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
                    </Box>
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
                        <MenuItem value="" disabled>Keywords</MenuItem>
                        <MenuItem value="coin1">Keyword 1</MenuItem>
                        <MenuItem value="coin2">Keyword 2</MenuItem>
                        {/* Add more coins as needed */}
                    </Select>
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
                        <MenuItem value="" disabled>Exchange - All</MenuItem>
                        <MenuItem value="category1">Exchange 1</MenuItem>
                        <MenuItem value="category2">Exchange 2</MenuItem>
                        {/* Add more categories as needed */}
                    </Select>
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
                        <MenuItem value="" disabled>Categories - All</MenuItem>
                        <MenuItem value="coin1">Category 1</MenuItem>
                        <MenuItem value="coin2">Category 2</MenuItem>
                        {/* Add more coins as needed */}
                    </Select>
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
                        <MenuItem value="" disabled>Sort by</MenuItem>
                        <MenuItem value="coin1">Sort 1</MenuItem>
                        <MenuItem value="coin2">Sort 2</MenuItem>
                        {/* Add more coins as needed */}
                    </Select>
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
                        <MenuItem value="" disabled>Show only</MenuItem>
                        <MenuItem value="coin1">Show 1</MenuItem>
                        <MenuItem value="coin2">Show 2</MenuItem>
                        {/* Add more coins as needed */}
                    </Select>
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
                        Proceed
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Sentiments;