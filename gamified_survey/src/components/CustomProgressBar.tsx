import React, { Fragment } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CustomProgressBar = () => {
  const { t } = useTranslation()
  const now = 70;

  const progressInstance = (
    <ProgressBar className="progress-bar-div " now={now} />
  );
  return (
    <Fragment>
      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {progressInstance}
      </div>
    </Fragment >

  );
};
export default CustomProgressBar;
