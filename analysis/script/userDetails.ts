import { ParsedDataType, IpanasDataType, hexadType, userDetailsType } from '../types'

const keyMapping: any = {
    'Strongly disagree': 1,
    'Somewhat disagree': 2,
    'Neither agree nor disagree': 3,
    'Somewhat agree': 4,
    'Strongly agree': 5
}

const getUserDetails = (data: Array<ParsedDataType>): Array<userDetailsType> => {
    return data.reduce((dataWithAffects: Array<any>, eachDatum: ParsedDataType, index) => {

        const postSurveyData = eachDatum.postsurvey.q3
        const mainsurvey = eachDatum.mainsurvey
        if (!postSurveyData || Object.keys(postSurveyData).length === 0) {
            return dataWithAffects
        }

        const usersPerceivedDuration = keyMapping[postSurveyData['Completing the questionnaire took a lot of time.']]
        const questionsAnsweredByTheUser = Object.keys(mainsurvey).length

        dataWithAffects.push({
            [index]: {
                usersPerceivedDuration,
                questionsAnsweredByTheUser
            }
        })

        return dataWithAffects
    }, [])
}

export default getUserDetails