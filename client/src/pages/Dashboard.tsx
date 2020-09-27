import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/Badges'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import DashboardComponent from '../components/dashboard/DashboardComponent';
import { Badge } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';


const Dashboard = () => {
    const { t } = useTranslation()

    const listOfAchievedBadges: Array<Badge> = useSelector((state: RootState) => state.addBadgeReducer)
    const pointsAchieved: number = useSelector((state: RootState) => state.addPointsReducer)

    let mode: string = ''
    if (listOfAchievedBadges.length > 1) {
        mode = 'badges'
    } else if (pointsAchieved > 100) {
        mode = 'leaderboard'
    }


    return (
        <div className="container">
            <Header children={<></>} />
            <div className="main-body">
                {mode === 'badges' ? <Badges /> : null}
                <CustomProgressBar progress={100} />
                <DashboardComponent
                    mode={mode}
                    listOfAchievedBadges={listOfAchievedBadges}
                    pointsAchieved={pointsAchieved} />
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard
