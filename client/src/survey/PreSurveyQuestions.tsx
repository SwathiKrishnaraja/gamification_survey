import React from 'react'
import * as Survey from 'survey-react'
import { Questions, MatrixObject } from '../types/types'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Mode, AddModeActionType } from '../reducer/entryPointReducer'
import { Dispatch } from 'redux'
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

const json = {
    "completeText": "Submit",
    showPrevButton: false,
    "pages": [
        {
            "elements": [
                {
                    "type": "panel",
                    "elements": [
                        q1, q2, q3, q4, q5
                    ],
                    "name": "panel1"
                }
            ],
            "name": "page0"
        },
    ],
    mode: 'edit'
}
const handleNavigationOnComplete = async (history: import("history").History<import("history").History.UnknownFacade> | string[], dispatch: Dispatch<AddModeActionType>) => {

    dispatch({ type: 'ADD_MODE', payload: { mode: 'GAMIFIED' } })
    // const surveyModeResponse = await fetch('http://localhost:8080/mode',)
    // // const mode = await surveyModeResponse.json()
    // const response = await fetch('http://localhost:8080/mode', {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: JSON.stringify({ mode: 'GAMIFIED_VERSION' }) // body data type must match "Content-Type" header
    // });
    // console.log(response.json())
    // console.log(mode)
    history.push('/GuidedTourTraditional')
}
const SurveyQuestions = () => {
    const dispatch: Dispatch<AddModeActionType> = useDispatch()
    const history = useHistory()
    return (
        <Survey.Survey json={json} onComplete={() => handleNavigationOnComplete(history, dispatch)} />
    )
}
export default SurveyQuestions 