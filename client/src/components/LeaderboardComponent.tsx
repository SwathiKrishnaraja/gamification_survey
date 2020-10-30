import React from 'react';

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
    </div>
}

export default LeaderboardComponent

