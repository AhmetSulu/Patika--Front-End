import React from 'react';

export const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  return (
    <button
      className={`btn btn-${variant} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};