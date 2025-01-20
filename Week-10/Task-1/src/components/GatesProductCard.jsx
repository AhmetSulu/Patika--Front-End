import React from 'react';
import { formatMoney } from './utils/formatMoney';

export const GatesProductCard = ({ 
  product, 
  quantity = '0',
  onQuantityChange,
  onBuy,
  onSell,
  canBuy 
}) => (
  <div className="gates-product-card">
    <img 
      src={product.image} 
      alt={product.name}
      className="gates-product-image"
    />
    <h3 className="gates-product-name">{product.name}</h3>
    <p className="gates-product-price">{formatMoney(product.price)}</p>
    
    <div className="gates-product-controls">
      <button
        onClick={() => onSell(product)}
        disabled={!parseInt(quantity)}
        className={`gates-product-button ${
          parseInt(quantity) ? 'gates-button-sell' : 'gates-button-disabled'
        }`}
      >
        Sell
      </button>
      
      <input
        type="text"
        value={quantity}
        onChange={(e) => onQuantityChange(product.id, e.target.value)}
        className="gates-product-input"
      />
      
      <button
        onClick={() => onBuy(product)}
        disabled={!canBuy}
        className={`gates-product-button ${
          canBuy ? 'gates-button-buy' : 'gates-button-disabled'
        }`}
      >
        Buy
      </button>
    </div>
  </div>
);