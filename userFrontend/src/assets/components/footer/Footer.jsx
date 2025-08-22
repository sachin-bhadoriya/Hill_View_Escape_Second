import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-logo "><span className="slash">/</span><span className='playFair main'>HillViewEscape</span></h2>

      <ul className="footer-links raleWay">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/room">Rooms</Link></li>
        <li><Link to="/">Support</Link></li>
        <li><Link to="/">Help</Link></li>
      </ul>

      {/* <div className="footer-divider" /> */}

      <div className="footer-social">
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaGithub />
      </div>

      <hr />

      <p className="footer-copy">© Copyright 2025, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
