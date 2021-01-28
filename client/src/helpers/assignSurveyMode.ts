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

    if (surveyCount <= 100) {
        return studyOne(modesFromBackend)
    }

    if (surveyCount > 100 && surveyCount <= 200) {
        return studyTwo(modesFromBackend)
    }

    if (modesFromBackend.length > 200) {
        return studyThree(modesFromBackend)
    }

}

export default assignSurveyMode 