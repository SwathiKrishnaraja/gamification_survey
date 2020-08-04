import React, { useState } from 'react'
import ImprintModal from './ImprintModal';
import ImprintContent from './ImprintContent'
import styled from 'styled-components'

const FooterComponent = styled.footer`
  position: relative;
  bottom: 0px;
  width: 100%
`
const Footer = () => {
  const [showImprint, setShowImprint] = useState<boolean>(false)
  const handleImprintClick = () => {
    setShowImprint(showImprint ? false : true)
  }
  return (
    <FooterComponent>
      <hr style={{ width: '98%' }} />
      <div className="home-footer">

        <button style={{ marginRight: 5 }} className="imprint-button" onClick={handleImprintClick}>Legal Information</button>
        <button className="imprint-button" onClick={handleImprintClick}>Data Protection Information</button>
        <ImprintModal showModal={showImprint} handleClick={handleImprintClick} title='Privacy and General Information' children={<ImprintContent />} />

      </div>
    </FooterComponent>
  );
};

export default Footer;
