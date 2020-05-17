import Link from 'next/link';
import { Fragment } from 'react';

const HomeContent = () => {
  return (
    <Fragment>
      <div className="main-body">
        <h2>MASTER THESIS – EXERCISE AND SPORTS</h2>
        <p style={{ fontSize: 20, textAlign: 'left' }}>Hello,</p>
        <p style={{ fontSize: 20, textAlign: 'left' }}>
          I would like to invite you to take part in a survey about sports and
          exercise as part of my master thesis. Please answer the questions as
          honestly as possible. Of course, all your data will be kept anonymous
          and confidential and cannot be traced back to you. If you are not sure
          which answer applies to you, please choose the alternative that
          applies to you.
        </p>
        <p style={{ fontSize: 20, textAlign: 'left' }}>
          It will take about 10-15 minutes to answer the questionnaire.
        </p>
        <p style={{ fontSize: 20, textAlign: 'left' }}>
          Thank you for your cooperation,
        </p>
        <p style={{ fontSize: 20, textAlign: 'left' }}>Swathi Krishnaraja</p>
      </div>
      <Link href="/ConsentForm" passHref>
        <button className="continue-button">Continue</button>
      </Link>
    </Fragment>
  );
};

export default HomeContent;
