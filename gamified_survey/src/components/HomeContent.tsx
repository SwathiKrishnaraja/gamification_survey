import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import udsLogo from '../content/sic.png'
import dfkiLogo from '../content/DFKI_Logo.jpg'
import umtlLogo from '../content/umtlLogo.png'

const HomeContent = () => {
  const { t } = useTranslation()
  const history = useHistory();
  console.log(history)
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
          <h4>*Data Protection and Participation Information</h4>
          <input type='checkbox' />
          <label>I have read and understood the information on <a style={{ textDecoration: 'none', color: '#337ab7' }} href='# '>data protection</a> and the participation information and agree that my data may be used anonymously for the mentioned purposes</label>
        </div>

      </div>
      <button className="continue-button" onClick={() => history.push('/PreSurvey')}>{t('homeContent.button')}</button>
    </Fragment>
  );
};

export default HomeContent;
