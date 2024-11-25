import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ image, title, description, author, time, authorImage, course, videoUrl }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    document.body.style.overflowY = 'auto';
    navigate('/DashBoard/Course/Details', { state: { course } }); // Pass the entire course object as state
  };

  return (
    <div className="course-card" onClick={handleCardClick}>
      <div className="media-section">
        {videoUrl ? (
          // Render YouTube video if videoUrl is provided
          <iframe
            width="100%"
            height="150"
            src={`https://www.youtube.com/embed/${videoUrl.split('v=')[1]}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          // Render image if videoUrl is not provided
          <img src={image} alt={title} className="course-image" />
        )}
      </div>
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <div className="course-footer">
          <div className="author-info">
            <img src={authorImage} alt={author} className="author-image" />
            <span className="course-author">{author}</span>
          </div>
          <span className="course-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;