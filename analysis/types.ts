export type ParsedDataType = {
    presurvey: {
        q1: {
            [key: string]: string,
        },
        q2: {
            [key: string]: string
        },
    },
    postsurvey: {
        q1: {
            [key: string]: string
        },
        q2: object,
    }
}
export type IpanasDataType = {
    [key: string]: {
        presurvey: {
            positive_affect: number,
            negative_affect: number
        },
        postsurvey: {
            positive_affect: number,
            negative_affect: number
        }
    }
}

export type hexadType = {
    [key: string]: {
        philanthropist: number
        socializer: number
        freeSpirit: number
        achiever: number
        disruptor: number
        player: number
    }
}

export type Data = {
    title: string,
    values: Array<any>,
    types: Array<number>,
    type_names: Array<string>,
    started_at: string,
    finished_at: string,
    checksum: string
}