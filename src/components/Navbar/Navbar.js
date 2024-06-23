import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router DOM
import logoncc from 'C:/Users/91859/OneDrive/Documents/GitHub/NCC-website/ncc/src/images/logoncc.png';
import hrclogo from 'C:/Users/91859/OneDrive/Documents/GitHub/NCC-website/ncc/src/images/hrclogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="parentHeader">
      <div className="Header">
        <div className="nccLogo">
          <img src={logoncc} alt="nccLogo" />
        </div>
        <div className="Heading">
          <h1 className="title">National Cadet Corps Hansraj</h1>
        </div>
        <div className="hrcLogo">
          <img src={hrclogo} alt="nccLogo" />
        </div>
      </div>
      <div className="navbar">
        <button className="button">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </button>
        <button className="button">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </button>
        <button className="button">
          <Link to="/NCC" className="nav-link">
            NCC
          </Link>
        </button>
        
      </div>
    </div>
  );
}

export default Navbar;