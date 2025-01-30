import React from 'react';
import { QuizProvider } from './context/QuizContext';
import { LocaleProvider } from './context/LocaleContext';
import Question from './components/Question';
import Timer from './components/Timer';
import Results from './components/Results';
import LocaleSelector from './components/LocaleSelector';
import { Button } from './components/Button';
import { QUESTION_TIME } from './utils/constants';
import { useQuiz } from './hooks/useQuiz';
import { useLocale } from './hooks/useLocale';
import { QUIZ_QUESTIONS } from './utils/quizQuestions';
import { shuffleArray } from './utils/helpers';
import './App.css';

const GameContent = () => {
  const { state, dispatch } = useQuiz();
  const { t } = useLocale();

  const handleStart = () => {
    dispatch({ 
      type: 'START_GAME',
      payload: {
        questions: shuffleArray(QUIZ_QUESTIONS)
      }
    });
  };

  const handleAnswer = (answer) => {
    dispatch({
      type: 'ANSWER_QUESTION',
      payload: answer,
    });
  };

  const handleTimeUp = () => {
    dispatch({ type: 'TIME_UP' });
  };

  switch (state.gameState) {
    case 'intro':
      return (
        <div className="intro-container">
          <h1 className="quiz-title">{t('quizTitle')}</h1>
          <div className="intro-content">
            <ul className="intro-list">
              <li>{t('introRule1')}</li>
              <li>{t('introRule2')}</li>
              <li>{t('introRule3')}</li>
              <li>{t('introRule4')}</li>
              <li>{t('introRule5')}</li>
            </ul>
          </div>
          <Button onClick={handleStart} className="btn btn-primary btn-full">
            {t('startButton')}
          </Button>
        </div>
      );
    case 'playing':
      return (
        <div className="quiz-container">
          <Timer
            key={state.currentQuestion}
            initialTime={QUESTION_TIME}
            onTimeUp={handleTimeUp}
          />
          <Question
            questionData={state.questions[state.currentQuestion]}
            onAnswer={handleAnswer}
            questionNumber={state.currentQuestion + 1}
          />
        </div>
      );
    case 'results':
      return <Results />;
    default:
      return null;
  }
};

const App = () => {
  return (
    <LocaleProvider>
      <QuizProvider>
        <div className="container">
          <LocaleSelector />
          <div className="content">
            <GameContent />
          </div>
        </div>
      </QuizProvider>
    </LocaleProvider>
  );
};

export default App;