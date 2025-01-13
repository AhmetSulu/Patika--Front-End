import React from 'react';

function ClassCard({ title, classType, onClick, isActive }) {
  return (
    <div
      className={`class-type ${isActive ? 'active' : ''}`}
      data-class={classType}
      onClick={() => onClick(classType)}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default ClassCard;
