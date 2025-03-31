import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopUsers from './Pages/TopUsers';
import TrendingPosts from './Pages/TrendingPosts';
import Feed from './Pages/Feed';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/top-users" element={<TopUsers />} />
            <Route path="/trending-posts" element={<TrendingPosts />} />
        </Routes>
    );
};

export default AppRoutes;
