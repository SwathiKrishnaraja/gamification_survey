import React, { Fragment } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CustomProgressBar = () => {
  const { t } = useTranslation()
  const now = 70;

  const progressInstance = (
    <ProgressBar className="progress-bar-div " now={now} label={`${now}%`} />
  );
  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='progressBar-h3'>{t('homeContent.heading')}</h3>
        {progressInstance}
      </div>
    </Fragment >

  );
};
export default CustomProgressBar;
