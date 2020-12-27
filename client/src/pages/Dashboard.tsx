import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badges from '../components/Badges'
import { useTranslation } from 'react-i18next';
import CustomProgressBar from '../components/CustomProgressBar'
import DashboardComponent from '../components/dashboard/DashboardComponent';
import { Badge, Points } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import styled from 'styled-components'


const MainBody = styled.div`
  height: 80vh;
  margin: auto;
  width: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: medium;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Dashboard = () => {
    const { t } = useTranslation()

    const listOfAchievedBadges: Array<Badge> = useSelector((state: RootState) => state.addBadgeReducer)
    const pointsAchieved: Points = useSelector((state: RootState) => state.addPointsReducer)

    let mode: string = ''
    if (listOfAchievedBadges.length > 1) {
        mode = 'badges'
    } else if (pointsAchieved.points > 100) {
        mode = 'leaderboard'
    }


    return (
        <div className="container">
            <Header children={<></>} />
            <MainBody>
                {mode === 'badges' ? <Badges /> : null}
                <CustomProgressBar progress={100} />
                <DashboardComponent
                    mode={mode}
                    listOfAchievedBadges={listOfAchievedBadges}
                    pointsAchieved={pointsAchieved.points} />
            </MainBody>

            <Footer />
        </div>
    );
};

export default Dashboard
