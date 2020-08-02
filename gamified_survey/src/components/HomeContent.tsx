import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import udsLogo from '../content/sic.png'
import dfkiLogo from '../content/DFKI_Logo.jpg'
import ImprintContent from '../components/ImprintContent'
import ImprintModal from '../components/ImprintModal'
import styled from 'styled-components'

const HomeContent = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [hasAgreed, setHasAgreed] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(true)

  const handleDataProtectionTagClick = () => {
    setShowModal(showModal ? false : true)
  }

  const handleCheckBoxClick = () => {
    setHasAgreed(hasAgreed ? false : true)
  }

  const PrivacyHeading = styled.h4`
  color: ${isChecked ? "black" : "red"}
  `

  return (
    <Fragment>
      <div className="main-body">
        <p style={{ textAlign: 'left' }}>{t('homeContent.greeting')}</p>
        <p style={{ textAlign: 'left' }}>
          {t('homeContent.content1')}
        </p>
        <p style={{ textAlign: 'left' }}>
          {t('homeContent.content2')}
        </p>
        <p style={{ textAlign: 'left' }}>
          {t('homeContent.content3')}
        </p>
        <p style={{ textAlign: 'left' }}> {t('homeContent.name')}</p>
        <div className='home-page-logos'>
          <img alt='uds' src={udsLogo} />
          <img alt='dfki' src={dfkiLogo} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <PrivacyHeading>*Data Protection and Participation Information</PrivacyHeading>
          <input type='checkbox' onClick={handleCheckBoxClick} />
          <label>I have read and understood the information on <a style={{ textDecoration: 'none', color: '#337ab7' }} onClick={handleDataProtectionTagClick} href='# '>data protection</a> and the participation information and agree that my data may be used anonymously for the mentioned purposes</label>
          <ImprintModal children={<ImprintContent />} handleClick={handleDataProtectionTagClick} showModal={showModal} title='Privacy and General Information' />
        </div>

      </div>
      <button className="continue-button" onClick={() => hasAgreed ? history.push('/PreSurvey') : setIsChecked(false)}>{t('homeContent.button')}</button>
    </Fragment>
  );
};

export default HomeContent;
