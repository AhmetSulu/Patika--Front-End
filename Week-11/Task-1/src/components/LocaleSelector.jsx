import React from 'react';
import { useLocale } from '../hooks/useLocale';

const LocaleSelector = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="locale-selector">
      <select 
        value={locale} 
        onChange={(e) => setLocale(e.target.value)}
        className="locale-select"
      >
        <option value="tr">Türkçe</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LocaleSelector;