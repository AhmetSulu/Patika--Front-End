import React from 'react';
import { useTimer } from '../hooks/useTimer';
import { useLocale } from '../hooks/useLocale';

const Timer = ({ initialTime, onTimeUp }) => {
  const { t } = useLocale();
  const timeLeft = useTimer(initialTime, onTimeUp);

  return (
    <div className="timer">
      {t('timeLeft')}: {timeLeft} {t('seconds')}
    </div>
  );
};

export default Timer;