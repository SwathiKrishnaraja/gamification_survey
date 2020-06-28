import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/MockDashboardBadge'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import DashboardComponent from '../components/DashboardComponent';



const Dashboard = () => {
    const { t } = useTranslation()
    return (
        <div className="container">
            <Header children={<></>} />
            <div className="main-body">
                <Badges />
                <CustomProgressBar />
                <DashboardComponent />
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard