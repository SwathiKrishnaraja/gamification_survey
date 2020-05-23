import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
      </div>
      <button className="continue-button" onClick={() => history.push('/ConsentForm')}>{t('homeContent.button')}</button>
    </Fragment>
  );
};

export default HomeContent;
