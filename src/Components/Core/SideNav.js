import React from 'react';
import './SideNav.css';

const SideNav = ({ open, onClose, menu }) => {
  return (
    <div className={`sidenav ${open ? 'open' : ''}`}> 
      <div className="sidenav-header">
        <h2>PR Camera Rentals</h2>
        <p>Your go-to place for camera gear</p>
      </div>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <ul>
        {menu.map((item) => (
          <li key={item.name}>
            <a href={item.href} onClick={onClose}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="sidenav-footer">
        <small>© 2026 PR Camera Rentals</small>
      </div>
    </div>
  );
};

export default SideNav;