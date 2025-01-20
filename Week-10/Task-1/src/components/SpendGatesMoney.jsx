import React from 'react';
import { GatesHeader } from './GatesHeader';
import { GatesProductGrid } from './GatesProductGrid';
import { GatesReceipt } from './GatesReceipt';
import { GatesProvider } from './GatesContext';

const SpendGatesMoney = () => {
  return (
    <GatesProvider>
      <div className="gates-content">
        <GatesHeader />
        <div className="gates-wrapper">
          <GatesProductGrid />
          <GatesReceipt />
        </div>
      </div>
    </GatesProvider>
  );
};

export default SpendGatesMoney;