import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Switch, Box, Typography, Tabs, Tab } from '@mui/material';
import TradingViewPage from './TradingViewPage'; // Adjust the import based on your project structure

export default function SentimentDetails() {
    const location = useLocation();
    const { sentiment } = location.state || {};

    // State for the UP/DOWN tab
    const [voteTabIndex, setVoteTabIndex] = useState(0); // 0 for UP, 1 for DOWN
    // State for the Day/Week/Month tab
    const [timePeriodTabIndex, setTimePeriodTabIndex] = useState(0); // 0 for DAY, 1 for WEEK, 2 for MONTH

    const [notify, setNotify] = useState(false);

    const handleVoteTabChange = (event, newValue) => {
        setVoteTabIndex(newValue);
    };

    const handleTimePeriodTabChange = (event, newValue) => {
        setTimePeriodTabIndex(newValue);
    };


    const handleNotifyChange = (event) => {
        setNotify(event.target.checked);
    };

    return (
        <>
            <Box sx={{
                paddingBottom: 5,
                paddingX: 0,
                backgroundColor: '#314852',
                borderRadius: 0,
                boxShadow: 1,
                marginTop: 2,
                marginBottom: 2,
                marginX: { xs: 2, sm: 10 },
                color: 'white'
            }}>
                {/* TradingView Chart */}
                <TradingViewPage isHeaderActive={false} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ marginTop: 2 }}>
                <Typography variant="h5" sx={{ marginTop: 3, fontWeight: 'bold' }}>
                    Share Your Opinion
                    </Typography>
                </Box>
                
                <Box sx={{ marginTop: 2 }}>
                <Typography variant="h6" sx={{ marginTop: 3 }}>
                {sentiment.title} will go
                    </Typography>
                    </Box>
                {/* UP/DOWN Tabs */}
                <Box sx={{ marginTop: 2 }}>
                    <Tabs value={voteTabIndex} onChange={handleVoteTabChange} indicatorColor="success">
                        <Tab label="UP" sx={{ color: 'white' }} />
                        <Tab label="DOWN" sx={{ color: 'white' }} />
                    </Tabs>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                <Typography variant="h6" sx={{ marginTop: 3 }}>
                {sentiment.title} will go UP over the
                    </Typography>
                    </Box>
                {/* Time Period Tabs */}
                <Box sx={{ marginTop: 2 }}>
                    <Tabs value={timePeriodTabIndex} onChange={handleTimePeriodTabChange} indicatorColor="primary">
                        <Tab label="DAY" sx={{ color: 'white' }} />
                        <Tab label="WEEK" sx={{ color: 'white' }} />
                        <Tab label="MONTH" sx={{ color: 'white' }} />
                    </Tabs>
                </Box>

                {/* Display sentiment details */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 3 }}>
                    <Typography variant="h6" sx={{ marginRight: 2 }}>
                        Notify me when the prediction has finished
                    </Typography>
                    <Switch
                        checked={notify}
                        onChange={handleNotifyChange}
                        color="primary"
                        sx={{
                            '&.Mui-checked': {
                                color: 'green', // Green color when active
                            },
                            '&.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: 'green', // Background color when active
                            },
                            '& .MuiSwitch-track': {
                                backgroundColor: '#b0bec5', // Grey background when inactive
                            },
                        }}
                    />
                </Box>
                {/* Add more sentiment details here */}
                </Box>
                </Box>
        </>
    );
}