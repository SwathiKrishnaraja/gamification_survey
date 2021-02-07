import * as study1 from './study1.json'

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
    presurvey: object,
    postsurvey: object
}
const getParsedData = (data: Data): Array<ParsedDataType> => data.values.reduce((parsed, value, index) => {
    parsed[index] = {
        presurvey: value[2],
        postsurvey: value[4]
    }
    return parsed
}, [])


const iPanasScript = (data: Data) => {
    const parsedData: Array<ParsedDataType> = getParsedData(data)
}

iPanasScript(study1)