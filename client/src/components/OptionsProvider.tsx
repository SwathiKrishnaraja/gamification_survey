import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
height: 80vh;
align-items: center;
`

const ModeButton = styled.button`
    background-color:#096e75;
    margin:5px;
    border-color: #096e75;
    border-radius: 8px;
    color:white;
    height:50px;
    font-size: medium;
    cursor: pointer;
    width:30%;
    margin-bottom:10px;
    &:hover {
    transition: all .2s ease 0s;
    background-color: #5f947a;
    }
`

const Heading = styled.h4`
text-align:center;
color: #096e75;
font-family: "Titillium Web",sans-serif;
`

type Props = {
    handleModeSelected: () => void
}
const OptionsProvider: React.FC<Props> = ({ handleModeSelected }) => {
    const dispatch = useDispatch()

    return (
        <Container>
            <ModeButton
                onClick={(() => {
                    dispatch({ type: 'SELECTED_MODE', payload: 'TRADITIONAL' })
                    handleModeSelected()
                })}>
                Baseline Survey
                </ModeButton>
            <ModeButton
                onClick={(() => {
                    dispatch({ type: 'SELECTED_MODE', payload: 'GAMIFIED_WITH_BADGES' })
                    handleModeSelected()
                })}>
                Badges Survey</ModeButton>
            <ModeButton
                onClick={(() => {
                    dispatch({ type: 'SELECTED_MODE', payload: 'GAMIFIED_WITH_POINTS' })
                    handleModeSelected()
                })}>
                Leaderboard Survey
                </ModeButton>
            <ModeButton
                onClick={(() => {
                    dispatch({ type: 'SELECTED_MODE', payload: 'TRADITIONAL_GAMIFIED_1' })
                    handleModeSelected()
                })}>
                Enable/Disable Gamification Survey
                </ModeButton>
            <ModeButton
                onClick={(() => {
                    dispatch({ type: 'SELECTED_MODE', payload: 'GAMIFIED_CHOICE_1' })
                    handleModeSelected()
                })}>
                Gamification Choice Survey</ModeButton>
        </Container>
    )
}

export default OptionsProvider