import { SurveyQuestionsType } from '../types/types'

const openQuestions = ['q10', 'q11', 'q14', 'q20']

const filterOpenQuestions = (listOfQuestions: Array<SurveyQuestionsType>) =>
    listOfQuestions && listOfQuestions
        .map(question => {
            return Object.keys(question)
                .filter(key => openQuestions.includes(key))
                .reduce((obj: SurveyQuestionsType, key) => {
                    obj[key] = question[key]
                    return obj
                }, {})
        })


export default filterOpenQuestions