import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import udsLogo from '../content/sic.png'
import DataProtection from './DataProtection'
import ImprintModal from './ImprintModal'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import assignSurveyMode from '../helpers/assignSurveyMode'
import { RootState } from '../reducer/reducer';


const PrivacyHeading = styled.h4`
color: ${props => props.color};
`

const Button = styled.button`
    width: 120px;
    background-color: #337ab7;
    border-color: #2e6da4;
    color: white;
    padding: 10px 16px;
    font-size: 18px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 160px;
`

const HomeContent = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [hasAgreed, setHasAgreed] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const dispatch = useDispatch()

  // Testing-setup for thesis
  const modeSelected = useSelector((state: RootState) => state.optionsProviderReducer)
  // Testing-setup for thesis

  const handleDataProtectionTagClick = () => {
    setShowModal(showModal ? false : true)
  }

  const modal = document.getElementsByClassName('modal-open')

  const handleClickOutsideModal = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === modal[0]) {
      handleDataProtectionTagClick()
    }
  }

  const handleCheckBoxClick = () => {
    setHasAgreed(hasAgreed ? false : true)
  }

  const addSurveyModeToStore = async () => {
    // Testing-setup for thesis
    // const surveyMode = await assignSurveyMode() //uncomment this for production

    const surveyMode = modeSelected

    // Testing-setup for thesis
    dispatch({ type: 'ADD_MODE', payload: surveyMode })
  }


  /**
   * On click of continue the following events are triggered
   * @event Get the current survey mode
   * @event Dispatch the survey mode to redux store
   * @event Navigate the user to the next page conditionally
   */
  const handleProceed = () => {
    addSurveyModeToStore()
    if (hasAgreed) {
      history.push('/PreSurvey')
    } else {
      setIsChecked(false)
    }
  }


  return (
    <Fragment>
      <div onClick={handleClickOutsideModal} id="modal" data-testid='intro-content' className="main-body">
        <div>
          <p style={{ textAlign: 'left' }}>Thank you for deciding to participate in this research.</p>
          <p style={{ textAlign: 'left' }}>
            I would like to invite you to this research project, which is a part of a Master Thesis
            performed, at the Saarland University, Germany. This project is in the form of a
            survey. While taking part in the survey, we will be measuring your behavior and a
            few psychological aspects such as your motivation, competence, and will present
            you questions on how you perceived the survey platform. Please note that you will
            not be requested for any personal information. Additionally, all your data will be kept
            anonymous and confidential and cannot be traced back to you.
          </p>
          <p style={{ textAlign: 'left' }}>
            Your responses will be very valuable for our research and hence contribute to our
            analyses of the survey versions and suggest new lines of approach for customizing
            a survey. Please answer the questions as honestly as possible. If you are not sure
            which answer applies to you, please choose the alternative that applies to you.
          </p>
          <p style={{ textAlign: 'left' }}>
            <b>Note:</b> The survey takes about 20-25 minutes. Kindly take part in the entire session
            as all the information collected from you at different stages of the survey, will be
            used for our analyses. Your feedback will help us to improve the experience - so
            every feedback is appreciated.
          </p>
          <p style={{ textAlign: 'left' }}>
            We personally want to thank you for every second invested in our research.
          </p>
          <p style={{ textAlign: 'left' }}> {t('homeContent.name')}</p>
          <div className='home-page-logos'>
            <img alt='uds' src={udsLogo} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <PrivacyHeading data-testid='privacy-header' color={isChecked ? 'black' : 'red'} >* Data Protection and Participation Information</PrivacyHeading>
            <input id="privacy" name="privacy" data-testid='privacy-checkbox' type='checkbox' onClick={handleCheckBoxClick} />
            <label style={{ cursor: 'pointer' }} htmlFor="privacy">I have read and understood the information on <a data-testid='data-protection-anchor' style={{ textDecoration: 'none', color: '#337ab7', cursor: 'pointer' }} onClick={handleDataProtectionTagClick} href='# '>data protection</a> and the participation information and agree that my data may be used anonymously for the mentioned purposes.</label>
            <ImprintModal children={<DataProtection />} handleClick={handleDataProtectionTagClick} showModal={showModal} title='Data Protection' />
          </div>
          <Button data-testid='proceed-button' onClick={handleProceed}>{t('homeContent.button')}</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeContent
