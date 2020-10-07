import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar">
            <button className="navbar-mobile-menu-btn no-select" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="navbar-mobile-menu-icon" />
            </button>
            
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
