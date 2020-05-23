import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const CustomProgressBar = () => {
  const now = 70;

  const progressInstance = (
    <ProgressBar className="progress-bar-div " now={now} label={`${now}%`} />
  );
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {progressInstance}
    </div>
  );
};
export default CustomProgressBar;
