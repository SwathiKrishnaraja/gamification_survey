import React from 'react'
import i18next from 'i18next';

const LanguageSelection = () => {
  return (
    <div className="language-button-div">
      <button className="language-button" onClick={() => i18next.changeLanguage('en')}>en</button>
      <button className="language-button" onClick={() => i18next.changeLanguage('de')}>de</button>
    </div>
  );
};

export default LanguageSelection;
