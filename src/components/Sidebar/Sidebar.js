import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Sidebar() {
  const { pathname } = useLocation();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    setIsSidebarVisible(pathname === '/');
  }, [pathname]);

  const flowerImgUrl = '/img/flower_banner.min.png';

  return (
    <div className="sidebar" style={{ display: isSidebarVisible ? 'block' : 'none' }}>
      <img className="sidebar-top-left-img" src={flowerImgUrl} alt="" />
      <img className="sidebar-bottom-left-img" src={flowerImgUrl} alt="" />

      <div className="sidebar-info">
        <h2 className="sidebar-info-heading">Malik &#38; Aurelia</h2>
        <h3 className="sidebar-info-content">Charlotte, North Carolina</h3>
        <h4 className="sidebar-info-content">Monday, March 99th, 2021</h4>
        <Link className="sidebar-info-rsvp-button" to="/RSVP">RSVP</Link>
      </div>
    </div>
  );
}

export default Sidebar;
