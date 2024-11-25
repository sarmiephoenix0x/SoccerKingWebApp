import React from 'react';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state; // Get the course object from state

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details">
      <div className="media-section">
        {course.videos ? (
          // Render YouTube video if video URL is provided
          <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${course.videos.split('v=')[1]}`}
            title={course.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          // Render image if video URL is not provided
          <img src={course.images} alt={course.title} className="details-image" />
        )}
      </div>
      <div className="details-content">
        <h1 className="details-title">{course.title}</h1>
        <div className="details-footer">
          <span className="details-date">{course.created_at}</span> {/* Assuming created_at is used for time */}
          <span className="details-author">{course.username}</span> {/* Assuming username is used for author */}
        </div>
        <p className="details-description">{course.article}</p> {/* Assuming article is used for description */}
      </div>
    </div>
  );
};

export default CourseDetails;