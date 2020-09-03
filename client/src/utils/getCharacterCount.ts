/**
 * @params Array of type OpenQuestions
 * @returns Array of object with key and value as character count 
 */
type OpenQuestions = {
    [key: string]: string | number
}

const splitString = (inputString: string) => inputString.split('')
const getNumberOfCharacters = (listOfWords: Array<string>) => listOfWords && listOfWords.length

const getCharacterCount = (listOfOpenQuestions: Array<OpenQuestions>): Array<OpenQuestions> => {
    listOfOpenQuestions.map(question => {
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