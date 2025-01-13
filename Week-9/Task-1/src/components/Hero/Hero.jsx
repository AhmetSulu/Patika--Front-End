import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/hero-man.jpg';

function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <div className="powerfull-tag">POWERFULL</div>
        <h1>Group<br />Practice<br />With Trainer</h1>
        <p className="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, exercitationem distinctio numquam inventore magnam quam eos ut! In, quibusdam sint deleniti veniam tempora odio ullam sequi doloremque vitae officia ipsum quidem quo voluptatum, ratione pariatur exercitationem consequuntur? Ducimus enim ex, adipisci reprehenderit quod unde eaque, doloribus laborum dolorem possimus id.</p>
        <div className="btn-container">
          <a href="#signup" className="btn btn-primary">Sign in</a>
          <a href="#details" className="btn btn-outline-light">Details</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
