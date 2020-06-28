import React from 'react'
import * as Survey from 'survey-react'
import { Questions, MatrixObject, Json } from '../types/types'
import { useHistory } from 'react-router-dom'

const q1: Questions = {
    type: "radiogroup",
    name: 'q1',
    title: 'How old are you?',
    choices: ['Below 18',
        '18-24',
        '24-34',
        '34-44',
        '44 and above'],

}

const q2: Questions = {
    type: "radiogroup",
    name: 'q2',
    title: 'Your Gender',
    choices: ['Female',
        'Male',
        'Non-binary',
        'Gender Variant/Non-conforming',
        'Not Listed',
        'Prefer not to answer'],

}
const q3: Questions = {
    type: "radiogroup",
    name: 'q3',
    title: 'Do you play computer games? This also includes games on smartphones, tablets, consoles and handhelds (Nintendo 3Ds, Sony Vita,.).',
    choices: ['Yes',
        'No',
        'No Answer']
}

const q4: Questions = {
    type: 'radiogroup',
    name: 'q4',
    title: "Are you familiar with badges (or accomplishments, achievements, trophies, badges, successes) from computer games?",
    choices: ['Yes', 'No', 'No Answer']
}

const q5: Questions = {
    type: 'matrix',
    name: 'q5',
    title: 'How are you feeling right now? The following words describe different feelings and sensations. Read each word and then enter the intensity of the feeling you are experiencing in the scale next to each word. You have the possibility to choose between five different levels',
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




const json: Json = {
    completeText: 'Submit',
    questions: [q1, q2, q3, q4, q5],
    mode: "edit"
}
const SurveyQuestions = () => {
    const history = useHistory()
    return (
        <Survey.Survey json={json} onComplete={() => history.push('/GuidedTourTraditional')} />
    )
}
export default SurveyQuestions 