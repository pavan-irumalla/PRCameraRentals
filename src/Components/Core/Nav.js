import React, { useState } from 'react';
import './Nav.css';
import SideNav from './SideNav';

const Nav = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const menu = [
    { name: 'Home', href: '#home' },
    { name: 'Rentals', href: '#rentals' },
    { name: 'Details', href: '#details' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          PR Camera Rentals
        </a>
        <ul className="navbar-menu">
          {menu.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <button className="navbar-btn" onClick={() => setSideOpen(true)}>
          ☰
        </button>
      </nav>
      <SideNav open={sideOpen} onClose={() => setSideOpen(false)} menu={menu} />
    </>
  );
};

export default Nav;