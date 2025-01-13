import React from 'react';
import './Footer.css';
import logoImage from '../../assets/images/logo.png';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoImage} alt="Powerfull" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo autem cum voluptates fuga voluptatum cumque accusamus corporis perferendis. Nisi ipsa asperiores deleniti facere incidunt.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Helpful Links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#supports">Supports</a></li>
              <li><a href="#terms">Terms & Condition</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
