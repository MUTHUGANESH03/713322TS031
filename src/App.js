import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TopUsers from './Pages/TopUsers';
import TrendingPosts from './Pages/TrendingPosts';
import Feed from './Pages/Feed';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/top-users" element={<TopUsers />} />
                    <Route path="/trending-posts" element={<TrendingPosts />} />
                    <Routes />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
