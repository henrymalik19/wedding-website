import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NAV_ITEMS = [
  { route: '/', label: 'Home' },
  { route: '/Story', label: 'Story' },
  { route: '/Gallery', label: 'Gallery' },
  { route: '/Registry', label: 'Registry' },
  { route: '/Guestbook', label: 'Guestbook' },
  { route: '/RSVP', label: 'RSVP' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <button type="button" className="navbar-mobile-menu-btn no-select" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="navbar-mobile-menu-icon" />
      </button>

      <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <NavLink onClick={toggleMenu} activeClassName="navbar-selected-item" exact to={item.route}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
