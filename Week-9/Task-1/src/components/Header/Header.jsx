import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '../../assets/images/logo.png';

function Header() {
  const [bgColor, setBgColor] = useState('transparent');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('#355592');
      } else {
        setBgColor('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed-top" id="header" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>
        <nav id="navbar" className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#classes">
                  Classes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#trainers">
                  Trainer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#review">
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-warning" href="#signup" role="button">
                  JOIN US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
