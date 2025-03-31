import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchPosts } from '../api/api';
import UserCard from '../Components/UserCard';

const TopUsers = () => {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        const getTopUsers = async () => {
            const users = await fetchUsers();
            const posts = await fetchPosts();
            
            const userPostCounts = Object.keys(users).map(id => ({
                id,
                name: users[id],
                postCount: posts.filter(post => post.userId === parseInt(id)).length
            }));

            userPostCounts.sort((a, b) => b.postCount - a.postCount);
            setTopUsers(userPostCounts.slice(0, 5));
        };
        
        getTopUsers();
    }, []);

    return (
        <div className="container">
            <h2>Top Users</h2>
            {topUsers.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    );
};

export default TopUsers;
