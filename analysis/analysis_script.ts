import * as study1 from './study1.json'

const UPSET = 'Upset'
const DETERMINED = 'Determined'
const ASHAMED = 'Ashamed'
const NERVOUS = 'Nervous'
const ATTENTIVE = 'Attentive'
const INSPIRED = 'Inspired'
const ACTIVE = 'Active'
const HOSTILE = 'Hostile'
const ALERT = 'Alert'
const AFRAID = 'Afraid'

const positiveAttributes = [ACTIVE, INSPIRED, ALERT, DETERMINED, ATTENTIVE]
const negativeAttributes = [UPSET, HOSTILE, ASHAMED, NERVOUS, AFRAID]

type Data = {
    title: string,
    values: Array<any>,
    types: Array<number>,
    type_names: Array<string>,
    started_at: string,
    finished_at: string,
    checksum: string
}

type ParsedDataType = {
    presurvey: {
        q1: {
            [key: string]: string,
        },
        q2: object,
    },
    postsurvey: {
        q1: {
            [key: string]: string
        },
        q2: object,
    }
}
const getParsedData = (data: Data): Array<ParsedDataType> => {
    const parsedData: Array<ParsedDataType> = data.values.reduce((parsed, value, index) => {
        parsed[index] = {
            presurvey: value[2],
            postsurvey: value[4]
        }
        return parsed
    }, [])
    return parsedData
}



const iPanasScript = (data: Data) => {
    const parsedData: Array<ParsedDataType> = getParsedData(data)
    const dataWithIPanas = getIPanasValue(parsedData)
    console.log(dataWithIPanas)
}

const getIPanasValue = (data: Array<ParsedDataType>) => {
    return data.reduce((dataWithAffects: Array<any>, eachDatum: ParsedDataType, index) => {
        let positiveAffectForPresurvey = 0
        let negativeAffectForPresurvey = 0
        let positiveAffectForPostsurvey = 0
        let negativeAffectForPostsurvey = 0

        if (!eachDatum.presurvey.q1 || !eachDatum.postsurvey.q1 || Object.keys(eachDatum.presurvey.q1).length === 0 || Object.keys(eachDatum.postsurvey.q1).length === 0) {
            return dataWithAffects
        }
        Object.keys(eachDatum.presurvey.q1).forEach(key => {
            if (positiveAttributes.includes(key)) {
                positiveAffectForPresurvey += Number(eachDatum.presurvey.q1[key])
            } else {
                negativeAffectForPresurvey += Number(eachDatum.presurvey.q1[key])
            }
        })

        Object.keys(eachDatum.postsurvey.q1).forEach(key => {
            if (positiveAttributes.includes(key)) {
                positiveAffectForPostsurvey += Number(eachDatum.postsurvey.q1[key])
            } else {
                negativeAffectForPostsurvey += Number(eachDatum.postsurvey.q1[key])
            }
        })

        dataWithAffects[index] = {
            [index]: {
                presurvey: {
                    positive_affect: positiveAffectForPresurvey,
                    negative_affect: negativeAffectForPresurvey
                },
                postsurvey: {
                    positive_affect: positiveAffectForPostsurvey,
                    negative_affect: negativeAffectForPostsurvey
                }
            }
        }
        return dataWithAffects
    }, [])
}

iPanasScript(study1)