import { ParsedDataType, IpanasDataType } from '../types'

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

const getIPanasValue = (data: Array<ParsedDataType>): Array<IpanasDataType> => {
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

        dataWithAffects.push({
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
        })
        return dataWithAffects
    }, [])
}

export default getIPanasValue