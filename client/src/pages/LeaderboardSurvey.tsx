import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import SurveyQuestions from '../survey/LeaderBoardSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';
import LeaderboardComponent from '../components/LeaderboardComponent'
import createABarGraphElement, { barGraphElements } from '../helpers/createLeaderboardElements'


const LeaderBoardSurvey = () => {
    const [progress, setProgress] = useState<number>(0)
    const dispatch = useDispatch()
    const pointsFromReduxStore = useSelector((state: RootState) => state.addPointsReducer)
    const { zeus, ron, han, jonas } = barGraphElements

    const handleProgress = () => {
        if (progress === 88) {
            setProgress(100)
        } else {
            setProgress(progress + 11)
        }
    }

    const user: React.ReactElement = createABarGraphElement('You', pointsFromReduxStore, (pointsFromReduxStore / 10), 'blue')

    const listOfComponents: Array<React.ReactElement> = [zeus, ron, han, jonas, user]

    useEffect(() => {
        dispatch({ type: 'ADD_POINTS', payload: 100 })

    }, [dispatch])

    return (
        <div className="container">
            <Header children={<ExitSurvey />} />
            <div className="main-body">
                <CustomProgressBar progress={progress} />
                <div className='leaderBoard-body'>
                    <div className='survey-body'>
                        <SurveyQuestions progress={progress} handleProgress={handleProgress} />
                    </div>
                    <LeaderboardComponent points={pointsFromReduxStore} listOfComponents={listOfComponents} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default LeaderBoardSurvey

