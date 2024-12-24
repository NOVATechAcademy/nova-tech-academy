import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>NOVA Tech Academy</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/apply">Apply</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
