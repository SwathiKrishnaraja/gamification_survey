/** 
 *  This file requests the backend api to get the previous survey modes 
    and assigns the current survey mode 
*/
type SurveyMode = {
    id: number,
    mode: 'TRADITIONAL' |
    'GAMIFIED' |
    'TRADITIONAL_GAMIFIED_1' |
    'TRADITIONAL_GAMIFIED_2' |
    'GAMIFIED_WITH_BADGES' |
    'GAMIFIED_WITH_POINTS' |
    'GAMIFIED_WITH_NARRATIVE' |
    'GAMIFIED_CHOICE_1' |
    'GAMIFIED_CHOICE_2' |
    'GAMIFIED_CHOICE_3'
}

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
    return modes
}
const getIndexOfMode = (listOfModes: Array<string>, { mode }: SurveyMode) =>
    listOfModes.findIndex((val) => val === mode)

const getPreviousSurveyMode = (modes: Array<SurveyMode>): SurveyMode | boolean => {
    if (modes && modes.length >= 1) {
        return modes.pop() as SurveyMode
    } else {
        return false
    }
}
/** 
   * Implements a simple round robin approach to assign the survey mode 
   * @returns survey mode 
*/
const assignNewSurveyMode = async () => {
    let newMode
    const modes = await getSurveyMode()
    const previousMode = getPreviousSurveyMode(modes)

    if (previousMode) {
        const indexOfPreviousMode = getIndexOfMode(modes, previousMode as SurveyMode)
        if (indexOfPreviousMode === (modes.length - 1)) {
            newMode = modes[0]
        } else {
            newMode = modes[indexOfPreviousMode + 1]
        }
    } else {
        newMode = modes[0]
    }

    return newMode
}

export { assignNewSurveyMode }