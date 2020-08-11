import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode
}
const Header: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation()
  return (
    <Fragment>
      <title>Gamification Survey</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/styles.css" rel="stylesheet" />
      <div className='header-content'>
        <h1 style={{ marginLeft: 50 }}>{t('homeContent.heading')}</h1>
        {children}
      </div>
    </Fragment>
  );
};

export default Header;
