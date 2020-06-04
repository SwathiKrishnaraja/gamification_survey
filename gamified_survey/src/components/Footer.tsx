import React, { useState } from 'react'
import ImprintModal from './ImprintModal';
import ImprintContent from './ImprintContent'
const Footer = () => {
  const [showImprint, setShowImprint] = useState<boolean>(false)
  const handleImprintClick = () => {
    setShowImprint(showImprint ? false : true)
  }
  return (
    <footer>
      <hr style={{ width: '98%' }} />
      <div className="home-footer">

        <button className="imprint-button" onClick={handleImprintClick}>Imprint</button>
        <ImprintModal showModal={showImprint} handleClick={handleImprintClick} children={<ImprintContent />} />
        <label>Copyrights reserved by Saarland University</label>
        <label>Survey published under MIT license</label>
      </div>
    </footer>
  );
};

export default Footer;
