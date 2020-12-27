import React from 'react'

const createABarGraphElement = (name: string, points: number, height: number, color: string = '#337ab7'): React.ReactElement => {

    return <div className='leader-element' key={Math.random()}>
        <span>{points} </span>
        <div style={{ width: 40, height: height, backgroundColor: color, borderRadius: 5 }}> </div>
        <span> {name} </span>
    </div >
}
const zeus = createABarGraphElement('Mark', 700, 70)
const ron = createABarGraphElement('Sash', 200, 20)
const han = createABarGraphElement('Jonas', 600, 60)
const jonas = createABarGraphElement('Alex', 500, 50)

export default createABarGraphElement

export const barGraphElements = { zeus, ron, han, jonas }