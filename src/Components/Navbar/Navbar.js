import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import coffeLogo from '../../assets/images/coffelogo.png'
const Navbar = () => {
    const activeStyle =({isActive})=> (isActive ?'activeStyle':'NormalLink text-decoration-none');
    return (
        <div className='container-fluid'>
            <div className="row align-items-center navstyle">
             <div className="logo col-4">
             <img src={coffeLogo} alt="" width={100} height={80}/>
            </div>
            <nav className="navs col-8 justify-content-center">
            <NavLink className={activeStyle} to='/'>Home</NavLink>
            <NavLink className={activeStyle} to='/reviewss'>Reviews</NavLink>
            <NavLink className={activeStyle} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={activeStyle} to='/aboutUs'>About</NavLink>
            <NavLink className={activeStyle} to='/blogs'>Blogs</NavLink>
            </nav>
            </div>
            
            
        </div>
    );
};

export default Navbar;