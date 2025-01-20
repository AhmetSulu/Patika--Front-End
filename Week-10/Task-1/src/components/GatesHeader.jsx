import React from 'react';
import { formatMoney } from './utils/formatMoney';
import { useGates } from './GatesContext';

export const GatesHeader = () => {
  const { displayBalance, isAnimating } = useGates();
  
  return (
    <>
      <div className="gates-header">
        <div className="gates-wrapper">
          <img 
            className="gates-header-image" 
            src="/images/billgates.jpg" 
            alt="Bill Gates" 
          />
          <h1 className="gates-title">
            Spend Bill Gates' Money
          </h1>
        </div>
      </div>

      <div className="gates-balance">
        <div className="gates-wrapper">
          <div className={`gates-balance-amount ${isAnimating ? 'gates-balance-animating' : ''}`}>
            {formatMoney(Math.round(displayBalance))}
          </div>
        </div>
      </div>
    </>
  );
};