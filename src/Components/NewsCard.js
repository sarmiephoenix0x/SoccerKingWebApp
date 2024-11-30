import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Avatar,
    Chip,
} from '@mui/material';

const NewsCard = ({ image, title, description, author, time, authorImage, newsItem, tags }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        document.body.style.overflowY = 'auto';
        navigate('/DashBoard/News/Details', { state: { newsItem } }); // Pass the entire news item as state
    };

    const renderTags = (tags) => {
        if (!tags) return null; // Return null if tags is undefined or null
        return tags.split(',').map((tag, index) => (
            <Chip key={index} label={tag.trim()} variant="outlined" size="small" sx={{ margin: '4px' }} />
        ));
    };

    return (
        <Card onClick={handleCardClick} sx={{ margin: 2, backgroundColor: '#314852', color: 'white', cursor: 'pointer' }}>
            <CardMedia
                component="img"
                height="100"
                image={image}
                alt={title}
                onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder-image.jpg'; }} // Replace with a placeholder image path
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">{time}</Typography>
                <Typography variant="h6" component="div">{title}</Typography>
                <Typography
                    variant="body2"
                    color="white"
                    sx={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 2, // Limit to 2 lines
                    }}
                >
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 1 }}>
                    {renderTags(tags)}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    <Avatar src={authorImage} alt={author} sx={{ width: 24, height: 24, marginRight: 1 }} />
                    <Typography variant="body2" color="#333">{author}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default NewsCard;