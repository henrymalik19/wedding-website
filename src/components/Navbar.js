import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar">
            <i className="fas fa-bars navbar-mobile-menu" onClick={toggleMenu}></i>
            
            <ul style={{
                    display: isMenuOpen ? "flex" : "none"
                }}>
                <li><NavLink activeClassName="navbar-selected-item" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="navbar-selected-item" to="/Story">Our Story</NavLink></li>
                <li><NavLink activeClassName="navbar-selected-item" to="/Gallery">Gallery</NavLink></li>
                <li><NavLink activeClassName="navbar-selected-item" to="/Registry">Registry</NavLink></li>
                <li><NavLink activeClassName="navbar-selected-item" to="/Guestbook">Guestbook</NavLink></li>
                <li><NavLink activeClassName="navbar-selected-item" to="/RSVP">RSVP</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
