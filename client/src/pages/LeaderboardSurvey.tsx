import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import SurveyQuestions from '../survey/LeaderBoardSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import LeaderboardComponent from '../components/LeaderboardComponent'
import createABarGraphElement, { barGraphElements } from '../helpers/createLeaderboardElements'
import Mascot from '../components/Mascot'
import pointsProvider from '../PointRules/PointsRules'
import { Points } from '../types/types';

const LeaderBoardSurvey = () => {
    const [progress, setProgress] = useState<number>(0)
    const dispatch = useDispatch()
    const providePoints = useMemo(() => pointsProvider(dispatch), [dispatch])
    const pointsFromReduxStore: Points = useSelector((state: RootState) => state.addPointsReducer)
    const { zeus, ron, han, jonas } = barGraphElements
    const [showMascot, setShowMascot] = useState<boolean>(false)

    const handleMascot = () => {
        setShowMascot(showMascot ? false : true)
    }

    const providePointsForMascot = () => {
        providePoints.points.findTheMascot()
    }

    const handleProgress = () => {
        if (progress === 99) {
            setProgress(100)
        } else {
            setProgress(progress + 10)
        }
    }

    const user: React.ReactElement = createABarGraphElement('You', pointsFromReduxStore.points, (pointsFromReduxStore.points / 10), 'blue')

    const listOfComponents: Array<React.ReactElement> = [zeus, han, ron, jonas, user]

    useEffect(() => {
        providePoints.points.letsGoPoints()

    }, [providePoints.points])

    return (
        <div className="container">
            <Header children={<ExitSurvey />} />
            <div className="main-body">
                <CustomProgressBar progress={progress} />
                <div className='leaderBoard-body'>
                    <div className='survey-body'>
                        <SurveyQuestions progress={progress} handleProgress={handleProgress} handleMascot={handleMascot} showMascot={showMascot} />
                        {showMascot ? <Mascot handleMascot={handleMascot} addPoints={providePointsForMascot} /> : null}
                    </div>
                    <LeaderboardComponent points={pointsFromReduxStore.points} listOfComponents={listOfComponents} />
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default LeaderBoardSurvey

