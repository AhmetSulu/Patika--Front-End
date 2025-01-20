import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_BALANCE, products } from './utils/productData';

const GatesContext = createContext();

export const useGates = () => {
  const context = useContext(GatesContext);
  if (!context) {
    throw new Error('useGates must be used within a GatesProvider');
  }
  return context;
};

export const GatesProvider = ({ children }) => {
  const [targetBalance, setTargetBalance] = useState(INITIAL_BALANCE);
  const [displayBalance, setDisplayBalance] = useState(INITIAL_BALANCE);
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let intervalId;
    
    if (targetBalance !== displayBalance) {
      setIsAnimating(true);
      const step = (targetBalance - displayBalance) / 10;
      const animationDuration = 100; 
      const stepDuration = animationDuration / 20;

      const animate = () => {
        setDisplayBalance(current => {
          const next = current + step;
          if ((step > 0 && next >= targetBalance) || (step < 0 && next <= targetBalance)) {
            setIsAnimating(false);
            return targetBalance;
          }
          return next;
        });
      };

      intervalId = setInterval(animate, stepDuration);
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }
  }, [targetBalance, displayBalance]);

  const handleQuantityChange = (productId, value) => {
    const sanitizedValue = value.replace(/[^0-9]/g, '').replace(/^0+/, '') || '0';
    const newQuantity = parseInt(sanitizedValue, 10);
    
    setQuantities(prev => ({
      ...prev,
      [productId]: sanitizedValue
    }));

    const product = products.find(p => p.id === productId);
    const currentQuantity = cart[productId] || 0;
    
    if (newQuantity > currentQuantity) {
      const difference = newQuantity - currentQuantity;
      const totalCost = difference * product.price;
      
      if (targetBalance >= totalCost) {
        setCart(prev => ({
          ...prev,
          [productId]: newQuantity
        }));
        setTargetBalance(prev => prev - totalCost);
      } else {
        const maxPossibleToBuy = Math.floor(targetBalance / product.price);
        const newTotal = currentQuantity + maxPossibleToBuy;
        setQuantities(prev => ({
          ...prev,
          [productId]: newTotal.toString()
        }));
        if (maxPossibleToBuy > 0) {
          setCart(prev => ({
            ...prev,
            [productId]: newTotal
          }));
          setTargetBalance(prev => prev - (maxPossibleToBuy * product.price));
        }
      }
    } else if (newQuantity < currentQuantity) {
      const difference = currentQuantity - newQuantity;
      const refund = difference * product.price;
      
      setCart(prev => ({
        ...prev,
        [productId]: newQuantity
      }));
      setTargetBalance(prev => prev + refund);
    }
  };

  const handleBuy = (product) => {
    if (targetBalance >= product.price) {
      const newQuantity = (cart[product.id] || 0) + 1;
      setCart(prev => ({
        ...prev,
        [product.id]: newQuantity
      }));
      setQuantities(prev => ({
        ...prev,
        [product.id]: newQuantity.toString()
      }));
      setTargetBalance(prev => prev - product.price);
    }
  };

  const handleSell = (product) => {
    if (cart[product.id] > 0) {
      const newQuantity = cart[product.id] - 1;
      setCart(prev => ({
        ...prev,
        [product.id]: newQuantity
      }));
      setQuantities(prev => ({
        ...prev,
        [product.id]: newQuantity.toString()
      }));
      setTargetBalance(prev => prev + product.price);
    }
  };

  const value = {
    targetBalance,
    displayBalance,
    cart,
    quantities,
    isAnimating,
    handleQuantityChange,
    handleBuy,
    handleSell
  };

  return <GatesContext.Provider value={value}>{children}</GatesContext.Provider>;
};