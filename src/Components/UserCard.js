import React from 'react';
import '../styles/Card.css';

const UserCard = ({ user }) => {
    return (
        <div className="card">
            <h3>{user.name}</h3>
            <p>Posts: {user.postCount}</p>
        </div>
    );
};

export default UserCard;
