import React, { useState } from 'react'
import ImprintModal from './ImprintModal';
import DataProtection from './DataProtection'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import LegalInformation from './LegalInformation';

const FooterComponent = styled.footer`
  position: relative;
  bottom: 0px;
  width: 100%
`
const Footer = () => {
  const [showImprint, setShowImprint] = useState<boolean>(false)
  const { t } = useTranslation()
  const [isLegal, setIsLegal] = useState<boolean>(false)
  const [isData, setIsData] = useState<boolean>(false)

  const handleDataProtection = () => {
    setIsLegal(false)
    setIsData(true)
    setShowImprint(showImprint ? false : true)
  }
  const handleLegalInformation = () => {
    setIsLegal(true)
    setIsData(false)
    setShowImprint(showImprint ? false : true)
  }
  return (
    <FooterComponent>
      <hr style={{ width: '98%' }} />
      <div className="home-footer">

        <button style={{ marginRight: 5 }} className="imprint-button" onClick={handleLegalInformation}>Legal Information</button>
        <button className="imprint-button" onClick={handleDataProtection}>Data Protection Information</button>
        <ImprintModal showModal={showImprint} handleClick={isLegal ? handleLegalInformation : handleDataProtection} title={isData ? t('dataProtectionInformation.header') : t('legalInformation.header')} children={isData ? <DataProtection /> : <LegalInformation />} />

      </div>
    </FooterComponent>
  );
};

export default Footer;
