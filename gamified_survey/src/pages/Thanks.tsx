import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';


const Thanks = () => {
    const { t } = useTranslation()
    return (
        <div className="container">
            <Header children={<></>} />
            <div className="main-body">
            </div>

            <Footer />
        </div>
    );
};

export default Thanks
