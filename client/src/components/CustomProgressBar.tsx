import React, { Fragment } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type Props = {
  progress: number
}
const CustomProgressBar = ({ progress }: Props) => {
  const { t } = useTranslation()
  const now = progress

  const progressInstance = (
    <ProgressBar data-testid='progress-bar' className="progress-bar-div " now={now} />
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
