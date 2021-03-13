import fs from 'fs'
import * as study1 from './study1.json'
import * as study2 from './study2.json'
import getIPanasValue from './script/ipanas'
import getHexadValue from './script/hexad'
import { ParsedDataType, IpanasDataType, Data, hexadType, imiType, userDetailsType, userExperienceType } from './types'
import getIMIValue from './script/imi'
import getUserDetails from './script/userDetails'
import getUserExperience from './script/userExperience'

const getParsedData = (data: Data): Array<ParsedDataType> => {
    const parsedData: Array<ParsedDataType> = data.values.reduce((parsed, value, index) => {
        parsed[index] = {
            presurvey: value[2],
            mainsurvey: value[3],
            postsurvey: value[4]
        }
        return parsed
    }, [])
    return parsedData
}

const writeToFile = (data: Array<IpanasDataType | hexadType | imiType | userDetailsType> | userExperienceType, fileName: string) => {
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
    const userDetails = getUserDetails(parsedData)
    const userExperience = getUserExperience(parsedData)
    writeToFile(iPanasData, 'iPanas')
    writeToFile(hexadData, 'hexad')
    writeToFile(imiData, 'imi')
    writeToFile(userDetails, 'userDetails')
    writeToFile(userExperience, 'userExperience')
}

analyseData(study2)

