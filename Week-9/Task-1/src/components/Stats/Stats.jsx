import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <section className="section section-gray" id="stats">
      <div className="full-background-blue"></div>
      <div className="stat-item">
        <div className="stat-number">325</div>
        <div className="stat-label">Course</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">405</div>
        <div className="stat-label">Work Out</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">305</div>
        <div className="stat-label">Working Hour</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">705</div>
        <div className="stat-label">Happy Client</div>
      </div>
    </section>
  );
}

export default Stats;