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
        <h2>{t('homeContent.heading')}</h2>
        <p style={{ fontSize: 20, textAlign: 'left' }}>{t('homeContent.greeting')}</p>
        <p style={{ fontSize: 20, textAlign: 'left' }}>
          {t('homeContent.content1')}
        </p>
        <p style={{ fontSize: 20, textAlign: 'left' }}>
          {t('homeContent.content2')}
        </p>
        <p style={{ fontSize: 20, textAlign: 'left' }}>
          {t('homeContent.content3')}
        </p>
        <p style={{ fontSize: 20, textAlign: 'left' }}> {t('homeContent.name')}</p>
        <div className='home-page-logos'>
          <img style={{ width: 200, height: 80 }} alt='uds' src={udsLogo} />
          <img style={{ width: 300, height: 70 }} alt='dfki' src={dfkiLogo} />
          <img style={{ width: 80, height: 75 }} alt='umtl' src={umtlLogo} />
        </div>

      </div>
      <button className="continue-button" onClick={() => history.push('/ConsentForm')}>{t('homeContent.button')}</button>
    </Fragment>
  );
};

export default HomeContent;
