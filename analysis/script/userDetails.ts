import { ParsedDataType, userDetails } from '../types'

const metricMapping: { [key: string]: number } = {
    'Strongly disagree': 1,
    'Somewhat disagree': 2,
    'Neither agree nor disagree': 3,
    'Somewhat agree': 4,
    'Strongly agree': 5
}

const getUserDetails = (data: Array<ParsedDataType>): Array<userDetails> => {

    return data.reduce((dataWithUserDetails: Array<any>, eachDatum: ParsedDataType, index) => {
        const metric = eachDatum.postsurvey.q3['Completing the questionnaire took a lot of time.']
        const usersPerceivedDuration = metricMapping[metric]
        const questionsAnsweredByTheUser = Object.keys(eachDatum.mainsurvey).length

        dataWithUserDetails.push({
            [index]: {
                usersPerceivedDuration,
                questionsAnsweredByTheUser
            }
        })
        return dataWithUserDetails

    }, [])
}

export default getUserDetails 