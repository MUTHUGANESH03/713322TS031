import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';
import PostCard from '../Components/PostCard';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const postsData = await fetchPosts();
            setPosts(postsData.reverse());
        };
        
        getPosts();
        const interval = setInterval(getPosts, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h2>Live Feed</h2>
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    );
};

export default Feed;
