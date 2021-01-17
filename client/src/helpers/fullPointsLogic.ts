type AnswerStore = {
    name: string,
    id: string,
    isAnswered: boolean
}

export const isActivePerson = (store: Array<AnswerStore>) =>
    store.find((answer) => answer.name === 'q5')

export const isInactivePerson = (store: Array<AnswerStore>) =>
    store.find((answer) => answer.name === 'q14')

