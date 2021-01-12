import { SurveyMode } from '../types/types'

const modes = [
    'TRADITIONAL',
    'GAMIFIED',
    'TRADITIONAL_GAMIFIED_1',
    'TRADITIONAL_GAMIFIED_2',
]

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
const studyOne = async (modesFromBackend: Array<SurveyMode>) => {
    let newMode
    const previousMode = await getPreviousSurveyMode(modesFromBackend)

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

export default studyOne