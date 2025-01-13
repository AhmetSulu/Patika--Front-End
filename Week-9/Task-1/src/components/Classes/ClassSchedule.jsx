import React from 'react';

function ClassSchedule({ schedule, title }) {
  return (
    <div className="schedule">
      <h2>{title} Class Schedule:</h2>
      {schedule.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default ClassSchedule;
