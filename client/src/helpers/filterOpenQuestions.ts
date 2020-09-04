type Questions = {
    [key:string]:string
}

const openQuestions = ['q10','q11', 'q14', 'q20','q21','q22','q23','q24' ]

const filterOpenQuestions = (listOfQuestions: Array<Questions>) => 
    listOfQuestions && listOfQuestions
    .map(question => {
        return Object.keys(question)
        .filter(key => openQuestions.includes(key))
        .reduce((obj:Questions, key) => {
            obj[key] = question[key]
            return obj
        },{})   
        })


export default filterOpenQuestions