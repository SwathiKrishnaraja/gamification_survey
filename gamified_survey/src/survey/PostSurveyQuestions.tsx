import React from 'react'
import * as Survey from 'survey-react'
import { Questions, MatrixObject, Json } from '../types/types'
import { useHistory } from 'react-router-dom'

const q1: Questions = {
    type: 'matrix',
    name: 'q5',
    title: "We would like to know again: How are you feeling right now? The following words describe different feelings and sensations.Read each word and then enter the intensity of that feeling in the scale next to each word.You have the possibility to choose between five different levels.",
    columns: [{
        value: 1,
        text: 'Slightly'
    },
    {
        value: 2,
        text: 'Moderately'
    },
    {
        value: 3,
        text: 'Very'
    },
    {
        value: 3,
        text: 'Extremely'
    },
    {
        value: 3,
        text: 'Not at all'
    }],
    rows: [{
        value: 'spare',
        text: 'angry',
    },
    {
        value: 'active',
        text: 'hostile',
    },
    {
        value: 'scope',
        text: 'awake'
    },
    {
        value: 'club',
        text: 'ashamed'
    },
    {
        value: 'club',
        text: 'suggested'
    },
    {
        value: 'club',
        text: 'nervous'
    },
    {
        value: 'club',
        text: 'determined'
    },
    {
        value: 'club',
        text: 'attention'
    },
    {
        value: 'club',
        text: 'anxious'
    },
    {
        value: 'club',
        text: 'active'
    },
    ]
}

const q2: Questions = {
    type: 'matrix',
    name: 'q5',
    title: "Below are some statements about the questionnaire itself. Please indicate in each case whether you agree with them strongly, rather agree, rather disagree or disagree not at all.",
    columns: [{
        value: 1,
        text: 'Strongly agree'
    },
    {
        value: 2,
        text: 'Agree'
    },
    {
        value: 3,
        text: 'Disagree'
    },
    {
        value: 3,
        text: 'Strongly disagree'
    },
    {
        value: 3,
        text: 'No Answer'
    }],
    rows: [{
        value: 'spare',
        text: 'The questionnaire was entertaining',
    },
    {
        value: 'active',
        text: 'Completing the questionnaire took a lot of time',
    },
    {
        value: 'scope',
        text: 'The questionnaire was designed differently from conventional questionnaires'
    },
    {
        value: 'club',
        text: 'I liked the questionnaire better than conventional questionnaires'
    },
    ]
}
const q3: Questions = {
    type: 'text',
    name: 'q3',
    title: 'What did you like about the survey?'
}
const q4: Questions = {
    type: 'text',
    name: 'q3',
    title: 'What did you not like about the survey?'
}
const q5: Questions = {
    type: 'text',
    name: 'q3',
    title: 'What would you change about the survey?'
}





const json: Json = {
    completeText: 'Submit and Exit',
    questions: [q1, q2, q3, q4, q5],
    mode: "edit"
}
const SurveyQuestions = () => {
    const history = useHistory()
    return (
        <Survey.Survey json={json} />
    )
}
export default SurveyQuestions 