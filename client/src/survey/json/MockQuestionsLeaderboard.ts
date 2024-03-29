import React, { Fragment } from 'react'
import * as Survey from 'survey-react'
import { Questions, MatrixObject } from '../../types/types'

const q1: Questions = {
    type: "radiogroup",
    name: 'q1',
    title: 'How do you feel in general?',
    choices: ['Very healthy',
        'Somewhat healthy',
        'Somewhat unhealthy',
        'Very unhealthy',
        'No Answer'],

}

const q2: Questions = {
    type: 'matrix',
    name: 'q5',
    title: 'You will find different activities listed here, please indicate if you are physically active at least once in a while.',
    columns: [{
        value: 1,
        text: 'Yes'
    },
    {
        value: 2,
        text: 'No'
    },
    {
        value: 3,
        text: 'No Answer'
    }],
    rows: [{
        value: 'spare',
        text: 'In my spare time I do sports to train',
    },]
}


const q3: Questions = {
    type: "checkbox",
    name: 'q8',
    title: 'If you are physically active, where is that?',
    choices: ['At school or at my training place',
        'In public spaces (streets, parks, green spaces, etc.)',
        'Within the framework of services provided by youth organizations or youth centers',
        'Elsewhere in nature',
        'In a sports club',
        'In public sports facilities (running tracks, swimming pools, climbing facilities, etc.)',
        'In fitness centers',
        'At home',
        'At my workplace']
}


const q4: Questions = {
    type: 'text',
    name: 'q10',
    title: 'There is a variety of physical activities, from playing football to things like rafting, hiking and dancing. What do you do?',
}



const json = {
    "completeText": "Submit",
    showPrevButton: false,
    // showCompletedPage: false,
    "pages": [
        {
            "elements": [
                {
                    "type": "panel",
                    "elements": [
                        q1, q2
                    ],
                    "name": "panel1"
                }
            ],
            "name": "page0"
        },
    ],
    mode: 'display'
}
export const model = new Survey.Model(json);

