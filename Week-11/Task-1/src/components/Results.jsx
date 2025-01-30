import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { useLocale } from '../hooks/useLocale';
import { Button } from './Button';
import Card from './Card';

const Results = () => {
  const { state, dispatch } = useQuiz();
  const { t } = useLocale();
  const { score, answers } = state;

  const handlePlayAgain = () => {
    dispatch({ 
      type: 'START_GAME',
      payload: { questions: state.questions }
    });
  };

  const questions = state.questions;

  return (
    <Card className="results-container">
      <h2 className="results-title">{t('results.title')}</h2>
      
      <div className="results-grid">
        <Card className="result-item result-correct">
          <span>{t('results.correct')}</span>
          <span>{score.correct}</span>
        </Card>
        <Card className="result-item result-wrong">
          <span>{t('results.wrong')}</span>
          <span>{score.wrong}</span>
        </Card>
        <Card className="result-item result-empty">
          <span>{t('results.empty')}</span>
          <span>{score.empty}</span>
        </Card>
      </div>

      <div className="answer-review">
        <h3 className="answer-review-title">Cevap Analizi</h3>
        {questions.map((question, index) => (
          <Card key={index} className="answer-review-item">
            <div className="question-text">
              <span className="question-number">#{index + 1}</span>
              {question.question}
            </div>
            <div className="answers-container">
              <div className="user-answer">
                <span className="answer-label">Verilen Cevap:</span>
                <span className={`answer-text ${answers[index]?.selected === question.answer ? 'correct' : 'wrong'}`}>
                  {answers[index]?.selected || 'Boş'}
                </span>
              </div>
              <div className="correct-answer">
                <span className="answer-label">Doğru Cevap:</span>
                <span className="answer-text correct">{question.answer}</span>
              </div>
            </div>
            <img 
              src={question.image}
              alt="Question"
              className="question-review-image"
            />
          </Card>
        ))}
      </div>
      
      <Button onClick={handlePlayAgain} className="btn btn-primary btn-full">
        {t('playAgain')}
      </Button>
    </Card>
  );
};

export default Results;