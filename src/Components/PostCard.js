import React from 'react';
import '../styles/Card.css';

const PostCard = ({ post }) => {
    return (
        <div className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;
