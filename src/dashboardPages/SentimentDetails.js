import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, FormControlLabel, Switch } from '@mui/material';
import TradingViewPage from './TradingViewPage'; // Adjust the import based on your project structure

export default function SentimentDetails() {
    const location = useLocation();
    const { sentiment } = location.state || {};

    // State for the UP/DOWN switch
    const [isUp, setIsUp] = useState(true);
    // State for the Day/Week/Month switch
    const [timePeriod, setTimePeriod] = useState('Day');

    const handleUpDownChange = () => {
        setIsUp(prev => !prev);
    };

    const handleTimePeriodChange = (event) => {
        setTimePeriod(event.target.value);
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
                <TradingViewPage isHeaderActive={false}/>

                {/* UP/DOWN Switch */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isUp}
                                onChange={handleUpDownChange}
                                color="success" // Green switch handle
                            />
                        }
                        label={isUp ? "UP" : "DOWN"}
                    />
                </Box>

                {/* Time Period Switch */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={timePeriod === 'Week'} // Switch to Week if checked
                                onChange={handleTimePeriodChange}
                                color="primary" // Default color for the switch
                            />
                        }
                        label={timePeriod}
                    />
                    <Box sx={{ marginLeft: 1 }}>
                        <button onClick={() => setTimePeriod('Day')}>Day</button>
                        <button onClick={() => setTimePeriod('Week')}>Week</button>
                        <button onClick={() => setTimePeriod('Month')}>Month</button>
                    </Box>
                </Box>

                {/* Display sentiment details */}
                <Typography variant="h5" sx={{ marginTop: 3 }}>
                    Sentiment Title: {sentiment.title}
                </Typography>
                {/* Add more sentiment details here */}
            </Box>
        </>
    );
}