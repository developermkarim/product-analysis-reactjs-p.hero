import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="logo col-4">
             <h1>Nav Bar</h1>
            </div>
            <div className="navs col-8">
            <Link to='/'>Home</Link>
            <Link to='/reviewss'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/aboutUs'>About</Link>
            <Link to='/blogs'>Blogs</Link>
            </div>
            
        </>
    );
};

export default Navbar;