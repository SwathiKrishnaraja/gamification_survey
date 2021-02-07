import fs from 'fs'
import * as study1 from './study1.json'
import getIPanasValue from './ipanas'
import { ParsedDataType, IpanasDataType, Data } from './types'

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

const writeToFile = (data: Array<IpanasDataType>) => {
    const stringifiedData = JSON.stringify(data)
    fs.writeFile('./ipanasData.json', stringifiedData, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Success')
        }
    })
}

const analyseData = (data: Data) => {
    const parsedData: Array<ParsedDataType> = getParsedData(data)
    const dataWithIPanas = getIPanasValue(parsedData)
    writeToFile(dataWithIPanas)
    console.log(dataWithIPanas)
}

analyseData(study1)

