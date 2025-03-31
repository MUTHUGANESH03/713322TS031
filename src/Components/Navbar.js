import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Social Media Analytics</h1>
            <div className="nav-links">
                <Link to="/">Feed</Link>
                <Link to="/top-users">Top Users</Link>
                <Link to="/trending-posts">Trending Posts</Link>
            </div>
        </nav>
    );
};

export default Navbar;
