import React from 'react';
import { Box, Typography } from '@mui/material';

const SentimentCard = ({ sentiment, onClick }) => {
    const upvotes = parseInt(sentiment.upvotes, 10);
    const downvotes = parseInt(sentiment.downvotes, 10);
    const totalVotes = upvotes + downvotes;
    const upvotePercentage = totalVotes > 0 ? (upvotes / totalVotes) * 100 : 0;
    const downvotePercentage = totalVotes > 0 ? (downvotes / totalVotes) * 100 : 0;

    return (
        <Box sx={{
            padding: 2,
            backgroundColor: '#314852',
            borderRadius: 2,
            boxShadow: 1,
            marginBottom: 2,
            color: 'white',
            cursor: 'pointer',
        }}
            onClick={onClick}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" fontWeight="bold">
                    {sentiment.title}
                </Typography>
                <Typography variant="body2">
                    {totalVotes} Votes
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Typography variant="body2" sx={{ color: 'green' }}>
                    {upvotePercentage.toFixed(0)}%
                </Typography>
                <Typography variant="body2" sx={{ color: 'red', marginLeft: 1 }}>
                    {downvotePercentage.toFixed(0)}%
                </Typography>

            </Box>
            <Box sx={{ display: 'flex', marginTop: 1 }}>
                <Box sx={{
                    width: `${upvotePercentage}%`,
                    height: 10,
                    backgroundColor: 'green',
                    borderRadius: '5px 0 0 5px',
                }} />
                <Box sx={{
                    width: `${downvotePercentage}%`,
                    height: 10,
                    backgroundColor: 'red',
                    borderRadius: '0 5px 5px 0',
                }} />
            </Box>
        </Box>
    );
};

export default SentimentCard;