import filterOpenQuestions from '../helpers/filterOpenQuestions'

describe('getCharacterCount', () => {
    test('Should return the correct character count', () => {
        const listOfQuestions= [
            {
                "q1": 'First rule of fight club',
                "q2": 'You do not talk about Fight club',
                "q10": 'Sunshine'
            }
        ]

        const expectedResult = [
            {
                "q10": 'Sunshine'
            }
        ]

        expect(filterOpenQuestions(listOfQuestions)).toEqual(expectedResult)
    })
})