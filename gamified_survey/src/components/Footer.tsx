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

        <button style={{ marginRight: 5 }} className="imprint-button" onClick={handleImprintClick}>Legal Information</button>
        <button className="imprint-button" onClick={handleImprintClick}>Data Protection Information</button>
        <ImprintModal showModal={showImprint} handleClick={handleImprintClick} children={<ImprintContent />} />

      </div>
    </footer>
  );
};

export default Footer;
