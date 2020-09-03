import getCharacterCount from '../utils/getCharacterCount'

describe('getCharacterCount', () => {
    test('Should return the correct character count', () => {
        const listOfOpenQuestions = [
            {
                "q1": 'First rule of fight club',
                "q2": 'You do not talk about Fight club'
            }
        ]

        const expectedResult = [
            {
                "q1": 24,
                "q2": 32
            }
        ]

        expect(getCharacterCount(listOfOpenQuestions)).toEqual(expectedResult)
    })
})