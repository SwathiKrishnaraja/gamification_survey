import {OpenQuestions} from '../types/types'


/**
 * @params Array of type OpenQuestions
 * @returns Array of object with key and value as character count 
 */


const splitString = (inputString: string) => inputString.split('')
const getNumberOfCharacters = (listOfWords: Array<string>) => listOfWords && listOfWords.length

const getCharacterCount = (listOfOpenQuestions: Array<OpenQuestions>): Array<OpenQuestions> => {
    listOfOpenQuestions && listOfOpenQuestions.map(question => {
        const data = Object.keys(question).forEach(key => {
            const listOfWords = splitString(question[key] as string)
            const wordCount = getNumberOfCharacters(listOfWords)
            question[key] = wordCount
        })
        return data
    })
    return listOfOpenQuestions
}

export default getCharacterCount