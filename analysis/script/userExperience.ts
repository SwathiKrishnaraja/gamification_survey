import { ParsedDataType, IpanasDataType, hexadType, userExperienceType } from '../types'

const getUserExperience = (data: Array<ParsedDataType>): userExperienceType => {
    let usersWithPlayingExperience = 0
    let usersWithoutPlayingExperience = 0
    let usersWithBadgeExperience = 0
    let usersWithoutBadgeExperience = 0

    data.forEach((eachDatum: ParsedDataType) => {

        const mainsurvey = eachDatum.mainsurvey
        if (!mainsurvey || Object.keys(mainsurvey).length === 0) {
            return undefined
        }

        const n = Object.keys(mainsurvey).length - 1

        const badgeExperienceKey = Object.keys(mainsurvey)[n]
        const gameExperienceKey = Object.keys(mainsurvey)[n - 1]

        if (mainsurvey[badgeExperienceKey] === 'Yes') {
            usersWithBadgeExperience += 1
        } else {
            usersWithoutBadgeExperience += 1
        }

        if (mainsurvey[gameExperienceKey] === 'Yes') {
            usersWithPlayingExperience += 1
        } else {
            usersWithoutPlayingExperience += 1
        }

    })

    return {
        usersWithPlayingExperience,
        usersWithoutPlayingExperience,
        usersWithBadgeExperience,
        usersWithoutBadgeExperience
    }
}

export default getUserExperience