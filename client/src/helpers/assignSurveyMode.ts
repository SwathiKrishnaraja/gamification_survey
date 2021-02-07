import studyOne from '../algorithm/studyOne'
import studyThree from '../algorithm/studyThree'
import studyTwo from '../algorithm/studyTwo'
import getSurveyMode from '../api/getSurveyMode'

/** 
   * Implements a simple round robin approach to assign the survey mode 
   * @returns survey mode 
*/
const assignSurveyMode = async () => {
    const { body: modesFromBackend } = await getSurveyMode()

    if (!modesFromBackend) {
        return 'TRADITIONAL'
    }

    const surveyCount = modesFromBackend.length

    if (surveyCount <= 80) {
        return studyOne(modesFromBackend)
    }

    if (surveyCount > 80 && surveyCount <= 180) {
        return studyTwo(modesFromBackend)
    }

    if (modesFromBackend.length > 180) {
        return studyThree(modesFromBackend)
    }

}

export default assignSurveyMode 