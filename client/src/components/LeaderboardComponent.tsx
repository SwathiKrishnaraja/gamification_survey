import React from 'react'
import styled from 'styled-components'

const Hint = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  background: #dbd9d9;
  position: sticky;
  top: 220px;
  display: flex;
  flex-direction:column;
  border-radius: 5px;
  overflow-y:scroll;
  padding:2px;
`
const HintDescription = styled.p`
    text-align: left;
    margin: 0px;
    padding-left: 5px;
    font-family: "Titillium Web",sans-serif;
`
const HintText = styled.p`
    text-align: center;
    font-weight:600;
    font-style:italic;
    font-family: "Titillium Web",sans-serif;
`
const HintList = styled.ul`
    text-align: left;
    list-style-type:square;
`

const HintListItem = styled.li`
    font-size: medium;
    padding:2px;
    font-family: "Titillium Web",sans-serif;
`
export const renderSortedComponents = (componentList: Array<React.ReactElement>) =>
    componentList.sort(
        (a, b) => (Number(b.props.children[0].props.children[0]) - Number(a.props.children[0].props.children[0]))
    )



type LeaderboardComponentProps = {
    points: number,
    listOfComponents: Array<React.ReactElement>
}
const LeaderboardComponent: React.FC<LeaderboardComponentProps> = ({ points, listOfComponents }) => {
    return <div className='points-leaderBoards-container'>
        <div className='points'>
            <div className='points-container'>
                <span>Points</span>
                <span>{points}</span>
            </div>
        </div>
        <div className='leaderBoard'>
            {renderSortedComponents(listOfComponents)}
        </div>
        <Hint>
            <HintText>How to achieve points</HintText>
            <HintDescription>You are provided 100 points:</HintDescription>
            <HintList>
                <HintListItem>On start of the survey.</HintListItem>
                <HintListItem>On answering 33% of the survey.</HintListItem>
                <HintListItem>On finding the mascot.</HintListItem>
                <HintListItem>On answering 66% of the survey.</HintListItem>
                <HintListItem>On reaching the last 5 questions.</HintListItem>
                <HintListItem>On answering the interview questions.</HintListItem>
                <HintListItem>On answering all the questions including the open questions.</HintListItem>
                <HintListItem>On taking atleast 3 minutes for each page.</HintListItem>
                <HintListItem>On completing the survey.</HintListItem>
            </HintList>
        </Hint>
    </div>
}

export default LeaderboardComponent

