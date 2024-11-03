import React, { useState } from 'react';

const FollowButton = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <button className={`follow-button ${isFollowing ? 'following' : ''}`} onClick={toggleFollow}>
            {isFollowing ? 'Following' : 'Follow'}
        </button>
    );
};

export default FollowButton;
