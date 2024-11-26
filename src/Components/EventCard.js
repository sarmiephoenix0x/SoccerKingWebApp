import React from 'react';

const EventCard = ({ event, onClick, onVote }) => {
  const upvotes = parseInt(event.upvotes, 10);
  const downvotes = parseInt(event.downvotes, 10);
  const totalVotes = upvotes + downvotes;
  const upvotePercentage = totalVotes > 0 ? (upvotes / totalVotes) * 100 : 0;

  return (
    <div className="event-card" onClick={onClick}>
      <div className="event-card-content">
        <div className="event-card-image">
          <img src={event.image} alt={event.title} />
        </div>
        <div className="event-card-details">
          <h2 className="event-card-title">{event.title}</h2>
          <span className="event-card-date">Created At: {event.created_at}</span>
          <p className="event-card-subtext">{event.sub_text}</p>
          <div className="event-card-votes">
            <span>Upvotes: {upvotes}</span>
            <span>Downvotes: {downvotes}</span>
          </div>
          <div className="event-card-vote-buttons">
            <button onClick={(e) => { e.stopPropagation(); onVote('upvote', event.id); }}>👍</button>
            <button onClick={(e) => { e.stopPropagation(); onVote('downvote', event.id); }}>👎</button>
          </div>
          <div className="event-card-progress">
            <div className="progress-bar" style={{ width: `${upvotePercentage}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;