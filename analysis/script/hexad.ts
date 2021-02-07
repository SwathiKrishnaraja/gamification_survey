import { ParsedDataType, IpanasDataType, hexadType } from '../types'

const philanthropistAttributes = [
    'It makes me happy if I am able to help others.',
    'I like helping others to orient themselves in new situations.',
    'I like sharing my knowledge.',
    'The well-being of others is important to me.'
]

const socializerAttributes = [
    'Interacting with others is important to me.',
    'I like being part of a team.',
    'It is important to me to feel like I am part of a community.',
    'I enjoy group activities.'
]

const freeSpiritAttributes = [
    'It is important to me to follow my own path.',
    'I often let my curiosity guide me.',
    'Opportunities for self-expression are important to me.',
    'Being independent is important to me.'
]

const achieverAttributes = [
    'I like overcoming obstacles.',
    'It is important to me to continuously improve my skills.',
    'I enjoy emerging victorious out of difficult circumstances.',
    'I like mastering difficult tasks.'
]

const disruptorAttributes = [
    'I like to provoke.',
    'I like to question the status quo.',
    'I see myself as a rebel.',
    'I dislike following rules.'
]

const playerAttributes = [
    'I like competitions where a prize can be won.',
    'Rewards are a great way to motivate me.',
    'Return of investment is important to me.',
    'If the reward is sufficient I will put in the effort.'
]

const getHexadValue = (data: Array<ParsedDataType>): Array<hexadType> => {
    return data.reduce((dataWithAffects: Array<any>, eachDatum: ParsedDataType, index) => {
        let philanthropist = 0
        let socializer = 0
        let freeSpirit = 0
        let achiever = 0
        let disruptor = 0
        let player = 0

        const presurveyData = eachDatum.presurvey.q2
        if (!presurveyData || Object.keys(presurveyData).length === 0) {
            return dataWithAffects
        }

        Object.keys(presurveyData).forEach(key => {
            if (philanthropistAttributes.includes(key)) {
                philanthropist += Number(presurveyData[key])
            } else if (socializerAttributes.includes(key)) {
                socializer += Number(presurveyData[key])
            } else if (freeSpiritAttributes.includes(key)) {
                freeSpirit += Number(presurveyData[key])
            } else if (achieverAttributes.includes(key)) {
                achiever += Number(presurveyData[key])
            } else if (disruptorAttributes.includes(key)) {
                disruptor += Number(presurveyData[key])
            } else if (playerAttributes.includes(key)) {
                player += Number(presurveyData[key])
            }
        })

        dataWithAffects.push({
            [index]: {
                philanthropist,
                socializer,
                freeSpirit,
                achiever,
                disruptor,
                player
            }
        })

        return dataWithAffects
    }, [])
}

export default getHexadValue