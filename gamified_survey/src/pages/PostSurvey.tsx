import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import Survey from '../survey/PostSurveyQuestions'
const PostSurvey = () => {

    const { t } = useTranslation()
    return (
        <div className="container">
            <Header children={<Fragment />} />
            <div className="main-body">
                <Survey />
            </div>
            <Footer />
        </div>
    );
};

export default PostSurvey;
