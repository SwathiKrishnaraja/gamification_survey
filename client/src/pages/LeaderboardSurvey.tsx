import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import SurveyQuestions from '../survey/LeaderBoardSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer';


const createABarGraphElement = (name: string, points: number, height: number, color: string = '#337ab7'): React.ReactElement =>
    <div className='leader-element' key={Math.random()} >
        <span> {points}</span >
        <div style={{ width: 40, height: height, backgroundColor: color, marginLeft: 10 }}></div>
        <span>{name}</span>
    </div >

const zeus = createABarGraphElement('zeus', 2200, 220)
const ron = createABarGraphElement('ron', 800, 80)
const han = createABarGraphElement('han', 1200, 120)
const jonas = createABarGraphElement('jonas', 500, 50)



const LeaderBoardSurvey = () => {
    const [progress, setProgress] = useState<number>(0)
    const dispatch = useDispatch()
    const pointsFromReduxStore = useSelector((state: RootState) => state.addPointsReducer)


    const handleProgress = () => {
        if (progress === 88) {
            setProgress(100)
        } else {
            setProgress(progress + 11)
        }
    }

    const user: React.ReactElement = createABarGraphElement('You', pointsFromReduxStore, (pointsFromReduxStore / 10), 'blue')

    const listOfComponents: Array<React.ReactElement> = [zeus, ron, han, jonas, user]
    const renderSortedComponents = (componentList: Array<React.ReactElement>) =>
        componentList.sort(
            (a, b) => (Number(b.props.children[0].props.children[1]) - Number(a.props.children[0].props.children[1]))
        )



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
                    <div className='points-leaderBoards-container'>
                        <div className='points'>
                            <div className='points-container'>
                                <span>Points</span>
                                <span>{pointsFromReduxStore}</span>
                            </div>
                        </div>
                        <div className='leaderBoard'>
                            {renderSortedComponents(listOfComponents)}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LeaderBoardSurvey


