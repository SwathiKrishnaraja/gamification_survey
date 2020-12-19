import React from 'react'

const createABarGraphElement = (name: string, points: number, height: number, color: string = '#337ab7'): React.ReactElement => {

    return <div className='leader-element' key={Math.random()}>
        <span>{points} </span>
        <div style={{ width: 40, height: height, backgroundColor: color, borderRadius: 5 }}> </div>
        <span> {name} </span>
    </div >
}
const zeus = createABarGraphElement('Mark', 2200, 220)
const ron = createABarGraphElement('Sash', 800, 80)
const han = createABarGraphElement('Jonas', 1200, 120)
const jonas = createABarGraphElement('Alex', 500, 50)

export default createABarGraphElement

export const barGraphElements = { zeus, ron, han, jonas }