import React, { useEffect, useState } from 'react';
import { fetchPosts, fetchComments } from '../api/api';
import PostCard from '../Components/PostCard';

const TrendingPosts = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);

    useEffect(() => {
        const getTrendingPosts = async () => {
            const posts = await fetchPosts();
            const comments = await fetchComments();
            
            const postCommentCounts = posts.map(post => ({
                ...post,
                commentCount: comments.filter(comment => comment.postId === post.id).length
            }));

            const maxComments = Math.max(...postCommentCounts.map(post => post.commentCount), 0);
            setTrendingPosts(postCommentCounts.filter(post => post.commentCount === maxComments));
        };
        
        getTrendingPosts();
    }, []);

    return (
        <div className="container">
            <h2>Trending Posts</h2>
            {trendingPosts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    );
};

export default TrendingPosts;
