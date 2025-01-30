import React, { createContext, useReducer } from 'react';
import { TOTAL_QUESTIONS } from '../utils/constants';

export const QuizContext = createContext();

const initialState = {
  currentQuestion: 0,
  answers: [],
  gameState: 'intro',
  timeLeft: 30,
  questions: [],
  score: {
    correct: 0,
    wrong: 0,
    empty: 0
  }
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...initialState,
        gameState: 'playing',
        questions: action.payload?.questions || state.questions
      };
    case 'ANSWER_QUESTION': {
      const newScore = {
        ...state.score,
        correct: action.payload.isCorrect ? state.score.correct + 1 : state.score.correct,
        wrong: !action.payload.isCorrect ? state.score.wrong + 1 : state.score.wrong
      };
      
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        answers: [...state.answers, action.payload],
        currentQuestion: nextQuestion,
        score: newScore,
        gameState: nextQuestion >= TOTAL_QUESTIONS ? 'results' : state.gameState
      };
    }
    case 'TIME_UP': {
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        answers: [...state.answers, { selected: null, isCorrect: false }],
        currentQuestion: nextQuestion,
        score: {
          ...state.score,
          empty: state.score.empty + 1
        },
        gameState: nextQuestion >= TOTAL_QUESTIONS ? 'results' : state.gameState
      };
    }
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};