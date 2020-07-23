import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomProgressBar from '../components/CustomProgressBar'
import SurveyQuestions from '../survey/GamifiedSurveyQuestions'
import ExitSurvey from '../components/ExitSurvey';

const LeaderBoardSurvey = () => {

    return (
        <div className="container">
            <Header children={<ExitSurvey />} />
            <div className="main-body">
                <CustomProgressBar progress={70} />
                <div className='leaderBoard-body'>
                    <div className='survey-body'>
                        <SurveyQuestions />
                    </div>
                    <div className='points-leaderBoards-container'>
                        <div className='points'>
                            <div className='points-container'>
                                <span>Points</span>
                                <span>1500</span>
                            </div>
                        </div>
                        <div className='leaderBoard'>
                            <div className='leader-element'>
                                <span>2200</span>
                                <div style={{ width: 40, height: 220, backgroundColor: '#337ab7', marginLeft: 10 }}></div>
                                <span>Zeus</span>
                            </div>
                            <div className='leader-element'>
                                <span>1500</span>
                                <div style={{ width: 40, height: 150, backgroundColor: 'blue', marginLeft: 10 }}></div>
                                <span>You</span>
                            </div>
                            <div className='leader-element'>
                                <span>1000</span>
                                <div style={{ width: 40, height: 100, backgroundColor: '#337ab7', marginLeft: 10 }}></div>
                                <span>Ron</span>
                            </div>
                            <div className='leader-element'>
                                <span> 800</span>
                                <div style={{ width: 40, height: 80, backgroundColor: '#337ab7', marginLeft: 10 }}></div>
                                <span>Jonas</span>
                            </div>
                            <div className='leader-element'>
                                <span> 500</span>
                                <div style={{ width: 40, height: 50, backgroundColor: '#337ab7', marginLeft: 10 }}></div>
                                <span>Han</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LeaderBoardSurvey
