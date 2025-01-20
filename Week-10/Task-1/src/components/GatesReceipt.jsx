import React from 'react';
import { formatMoney } from './utils/formatMoney';
import { products } from './utils/productData';
import { useGates } from './GatesContext';
import { INITIAL_BALANCE } from './utils/productData';

export const GatesReceipt = () => {
  const { cart, targetBalance } = useGates();

  const getItemTotal = (productId) => {
    const product = products.find(p => p.id === productId);
    return (cart[productId] || 0) * product.price;
  };

  if (!Object.keys(cart).some(id => cart[id] > 0)) {
    return null;
  }

  return (
    <div className="gates-receipt">
      <h2 className="gates-receipt-title">Your Receipt</h2>
      {Object.entries(cart).map(([productId, quantity]) => {
        if (quantity <= 0) return null;
        const product = products.find(p => p.id === Number(productId));
        return (
          <div key={productId} className="gates-receipt-item">
            <span className="gates-receipt-item-name">
              {product.name} x {quantity}
            </span>
            <span className="gates-receipt-item-price">
              {formatMoney(getItemTotal(Number(productId)))}
            </span>
          </div>
        );
      })}
      <div className="gates-receipt-total">
        <span className="gates-receipt-total-label">Total Spent:</span>
        <span className="gates-receipt-total-amount">
          {formatMoney(INITIAL_BALANCE - targetBalance)}
        </span>
      </div>
    </div>
  );
};