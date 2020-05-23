import React, { useState, FormEvent } from 'react'

const LanguageSelection = (props: any) => {
  const [language, setLanguage] = useState('en')
  const handleChange = (event: FormEvent<HTMLButtonElement>) => {
    console.log(event, props)


  }
  return (
    <div className="language-button-div">
      <button className="language-button" value={language} onChange={handleChange}>en</button>
      <button className="language-button" onChange={handleChange}>de</button>
    </div>
  );
};

export default LanguageSelection;
