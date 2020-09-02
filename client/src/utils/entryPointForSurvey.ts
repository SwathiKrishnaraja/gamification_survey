/** 
 *  This file requests the backend api to get the previous survey modes 
    and assigns the current survey mode 
*/


const modes = [
    'TRADITIONAL',
    'GAMIFIED',
    'TRADITIONAL_GAMIFIED_1',
    'TRADITIONAL_GAMIFIED_2',
    'GAMIFIED_WITH_BADGES',
    'GAMIFIED_WITH_POINTS',
    'GAMIFIED_WITH_NARRATIVE',
    'GAMIFIED_CHOICE_1',
    'GAMIFIED_CHOICE_2',
    'GAMIFIED_CHOICE_3'
]

const getSurveyMode = async () => {
    const surveyModeResponse = await fetch('http://localhost:8080/mode')
    const modes = await surveyModeResponse.json()
    return modes.pop()
}
const getIndexOfMode = (listOfModes: Array<string>, mode: string) =>
    listOfModes.findIndex((val) => val === mode)

/** 
   * Implements a simple round robin approach to assign the survey mode 
   * @returns survey mode 
*/
const assignNewSurveyMode = async () => {
    let newMode
    const previousMode = await getSurveyMode()
    const indexOfPreviousMode = getIndexOfMode(modes, previousMode)
    if (indexOfPreviousMode === (modes.length - 1)) {
        newMode = modes[0]
    } else {
        newMode = modes[indexOfPreviousMode + 1]
    }
    return newMode
}

export { assignNewSurveyMode }