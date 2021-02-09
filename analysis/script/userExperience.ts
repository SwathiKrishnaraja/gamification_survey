import { ParsedDataType, userExperience } from '../types'

const getUserExperience = (data: Array<ParsedDataType>): userExperience => {
    let usersWithPlayingExperience = 0
    let usersWithoutPlayingExperience = 0
    let usersWithBadgeExperience = 0
    let usersWithoutBadgeExperience = 0
    data.forEach((eachDatum: ParsedDataType) => {
        const playingExp = eachDatum.mainsurvey.q29
        const badgeExp = eachDatum.mainsurvey.q30
        if (playingExp) {
            switch (playingExp) {
                case 'Yes':
                    usersWithPlayingExperience += 1
                    break;
                case 'No':
                    usersWithoutPlayingExperience += 1
                default:
                    break;
            }
        }

        if (badgeExp) {
            switch (badgeExp) {
                case 'Yes':
                    usersWithBadgeExperience += 1
                    break;
                case 'No':
                    usersWithoutBadgeExperience += 1
                default:
                    break;
            }
        }
    })

    return ({
        usersWithPlayingExperience,
        usersWithoutPlayingExperience,
        usersWithBadgeExperience,
        usersWithoutBadgeExperience
    })
}

export default getUserExperience 