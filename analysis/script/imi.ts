import { ParsedDataType, imiType } from '../types'

const reverseKeyMapping: any = {
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1
}
const perceivedChoicePositive = [
    'I felt like I had to do this survey.',
    'I did this survey because I wanted to.',
    'I believe I had some choice about doing this survey.',
]
const perceivedChoiceNegative = [
    'I felt like it was not my own choice to do this survey.',
    'I did not really have a choice about doing this survey.',
    'I did this survey because I had no choice.',
    'I did this survey because I had to.'
]

const interestPositive = [
    'I thought this survey was quite enjoyable.',
    'I would describe this survey as very interesting.',
    'This survey was fun to do.',
    'While I was doing this survey, I was thinking about how much I enjoyed it.',
    'I enjoyed doing this survey very much.'
]

const interestNegative = [
    'I thought this was a boring survey.',
    'This survey did not hold my attention at all.',
]

const perceivedCompetencePositive = [
    'After working at this survey for awhile, I felt pretty competent.',
    'I think I did pretty well at this survey, compared to others participants.',
    'I was pretty skilled at doing this survey.',
    'I think I am pretty good at taking this survey.',
    'I am satisfied with my performance at this task.'
]

const perceivedCompetenceNegative = [
    'This was a survey that I could not do very well.',
]


const getIMIValue = (data: Array<ParsedDataType>): Array<imiType> => {
    return data.reduce((dataWithAffects: Array<any>, eachDatum: ParsedDataType, index) => {
        let perceivedChoice = 0
        let interest_enjoyment = 0
        let perceivedCompetence = 0


        const postsurveyData = eachDatum.postsurvey.q2
        if (!postsurveyData || Object.keys(postsurveyData).length === 0) {
            return dataWithAffects
        }

        Object.keys(postsurveyData).forEach(key => {
            if (perceivedChoicePositive.includes(key)) {
                perceivedChoice += Number(postsurveyData[key])
            } else if (perceivedChoiceNegative.includes(key)) {
                perceivedChoice += reverseKeyMapping[Number(postsurveyData[key])]
            } else if (interestPositive.includes(key)) {
                interest_enjoyment += Number(postsurveyData[key])
            } else if (interestNegative.includes(key)) {
                interest_enjoyment += reverseKeyMapping[Number(postsurveyData[key])]
            } else if (perceivedCompetencePositive.includes(key)) {
                perceivedCompetence += Number(postsurveyData[key])
            } else if (perceivedCompetenceNegative.includes(key)) {
                perceivedCompetence += reverseKeyMapping[Number(postsurveyData[key])]
            }
        })

        dataWithAffects.push({
            [index]: {
                perceivedChoice,
                interest_enjoyment,
                perceivedCompetence
            }
        })

        return dataWithAffects
    }, [])
}

export default getIMIValue