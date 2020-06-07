import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import udsLogo from '../content/udsLogo.png'
import dfkiLogo from '../content/dfkiLogo.png'
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
          <img style={{ width: 200, height: 80 }} alt='uds' src={udsLogo} />
          <img style={{ width: 300, height: 70 }} alt='dfki' src={dfkiLogo} />
          <img style={{ width: 80, height: 75 }} alt='umtl' src={umtlLogo} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h4>*Data Protection and Participation Information</h4>
          <input type='checkbox' />
          <label>I have read and understood the information on data protection and the participation information and agree that my data may be used anonymously for the mentioned purposes</label>
        </div>

      </div>
      <button className="continue-button" onClick={() => history.push('/GuidedTourTraditional')}>{t('homeContent.button')}</button>
    </Fragment>
  );
};

export default HomeContent;
