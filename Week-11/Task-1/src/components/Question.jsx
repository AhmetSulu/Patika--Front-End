import React, { useEffect, useState } from 'react';
import { OPTIONS_DELAY } from '../utils/constants';
import { useLocale } from '../hooks/useLocale';

const Question = ({ questionData, onAnswer, questionNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(OPTIONS_DELAY);
  const { t } = useLocale();
  
  useEffect(() => {
    setIsVisible(false);
    setCountdown(OPTIONS_DELAY);
    
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsVisible(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(countdownInterval);
  }, [questionData]);
  
  if (!questionData) {
    return null;
  }

  const handleOptionClick = (option) => {
    const answer = {
      selected: option,
      isCorrect: option === questionData.answer
    };
    onAnswer(answer);
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <h2 className="question-title">
          {t('question')} {questionNumber} : {questionData.question}
        </h2>
      </div>

      <img 
        src={questionData.image}
        alt="Question"
        className="question-image"
      />

      {isVisible ? (
        <div className="options-grid">
          {questionData.options.map((option, index) => (
            <button 
              key={index}
              onClick={() => handleOptionClick(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="countdown-container">
          <div className="countdown-number">{countdown}</div>
        </div>
      )}
    </div>
  );
};

export default Question;