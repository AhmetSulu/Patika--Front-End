import { useState, useEffect } from 'react';

export const useTimer = (initialTime, onTimeUp) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);
  
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);
  
  return timeLeft;
};