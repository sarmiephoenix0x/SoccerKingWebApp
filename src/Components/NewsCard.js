import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ image, title, description, author, time, authorImage, newsItem, tags }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        document.body.style.overflowY = 'auto';
        navigate('/DashBoard/News/Details', { state: { newsItem } }); // Pass the entire news item as state
    };

    const renderTags = (tags) => {
        if (!tags) return null; // Return null if tags is undefined or null
        return tags.split(',').map((tag, index) => (
            <div key={index} className="tag">
                {tag.trim()}
            </div>
        ));
    };

    return (
        <div className="news-card" onClick={handleCardClick}>
            <div className="media-section">
                <img
                    src={image}
                    alt={title}
                    className="news-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder-image.jpg'; }} // Replace with a placeholder image path
                />
            </div>
            <div className="news-content">
                <p className="news-date">{time}</p>
                <h3 className="news-title">{title}</h3>
                <p className="news-description">{description}</p>
                <div className="tags">
                    {renderTags(tags)}
                </div>
                <div className="news-footer">
                    <div className="author-info">
                        <img src={authorImage} alt={author} className="author-image" />
                        <span className="news-author">{author}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;