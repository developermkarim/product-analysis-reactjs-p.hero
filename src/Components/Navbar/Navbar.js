import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import coffeLogo from '../../assets/images/coffelogo.png';
const Navbar = () => {
   
    const activeStyle =({isActive})=> (isActive ?'activeStyle':'NormalLink text-decoration-none');
    return (
        <nav className='container-fluid'>
            
            <div className="row align-items-center navstyle px-4">
             <div className="logo col-5 ms-auto pb-3">
             <img src={coffeLogo} alt="" width={100} height={80}/>
            </div>
            <div className="navs col-7 justify-content-center">
            <NavLink className={activeStyle} to='/'>Home</NavLink>
            <NavLink className={activeStyle} to='/reviews'>Reviews</NavLink>
            <NavLink className={activeStyle} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={activeStyle} to='/aboutUs'>About</NavLink>
            <NavLink className={activeStyle} to='/blogs'>Blogs</NavLink>
            </div>
            </div>
            
            
        </nav>
    );
};

export default Navbar;