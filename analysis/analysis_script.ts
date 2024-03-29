import fs from 'fs'
import * as study1 from './study1.json'
import getIPanasValue from './script/ipanas'
import getHexadValue from './script/hexad'
import { ParsedDataType, IpanasDataType, Data, hexadType, imiType } from './types'
import getIMIValue from './script/imi'

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

const writeToFile = (data: Array<IpanasDataType | hexadType | imiType>, fileName: string) => {
    const stringifiedData = JSON.stringify(data)
    fs.writeFile(`./analysis/results/${fileName}.json`, stringifiedData, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Success')
        }
    })
}

const analyseData = (data: Data) => {
    const parsedData: Array<ParsedDataType> = getParsedData(data)
    const iPanasData = getIPanasValue(parsedData)
    const hexadData = getHexadValue(parsedData)
    const imiData = getIMIValue(parsedData)
    writeToFile(iPanasData, 'iPanas')
    writeToFile(hexadData, 'hexad')
    writeToFile(imiData, 'imi')
}

analyseData(study1)

