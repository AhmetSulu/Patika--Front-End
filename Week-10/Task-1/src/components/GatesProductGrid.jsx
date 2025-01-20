import React from 'react';
import { GatesProductCard } from './GatesProductCard';
import { products } from './utils/productData';
import { useGates } from './GatesContext';

export const GatesProductGrid = () => {
  const { quantities, targetBalance, handleQuantityChange, handleBuy, handleSell } = useGates();
  
  return (
    <div className="gates-product-grid">
      {products.map(product => (
        <GatesProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] || '0'}
          onQuantityChange={handleQuantityChange}
          onBuy={handleBuy}
          onSell={handleSell}
          canBuy={targetBalance >= product.price}
        />
      ))}
    </div>
  );
};