import { useTranslation } from 'react-i18next'
import { Questions, MatrixObject } from '../../types/types'

const JSON = () => {
    const { t } = useTranslation()

    const q1: Questions = {
        type: "radiogroup",
        name: 'q1',
        title: t('mainSurvey.q1'),
        choices: [t('mainSurvey.q1a1'),
        t('mainSurvey.q1a2'),
        t('mainSurvey.q1a3'),
        t('mainSurvey.q1a4'),
        t('mainSurvey.q1a5')]

    }

    const q2: Questions = {
        type: "radiogroup",
        name: 'q2',
        title: t('mainSurvey.q2'),
        choices: [t('mainSurvey.q2a1'),
        t('mainSurvey.q2a2'),
        t('mainSurvey.q2a3'),
        t('mainSurvey.q2a4'),
        t('mainSurvey.q2a5')]

    }
    const q3: Questions = {
        type: "radiogroup",
        name: 'q3',
        title: t('mainSurvey.q3'),
        choices: [t('mainSurvey.q3a1'),
        t('mainSurvey.q3a2'),
        t('mainSurvey.q3a3')]
    }

    const q4: Questions = {
        type: 'radiogroup',
        name: 'q4',
        title: t('mainSurvey.q4'),
        choices: [t('mainSurvey.q4a1'),
        t('mainSurvey.q4a2'),
        t('mainSurvey.q4a3')]
    }

    const q5: Questions = {
        type: 'matrix',
        name: 'q5',
        title: t('mainSurvey.q5'),
        columns: [{
            value: 1,
            text: t('mainSurvey.q5c1')
        },
        {
            value: 2,
            text: t('mainSurvey.q5c2')
        },
        {
            value: 3,
            text: t('mainSurvey.q5c3')
        }],
        rows: [{
            value: 'spare',
            text: t('mainSurvey.q5a1')
        },
        {
            value: 'active',
            text: t('mainSurvey.q5a2')
        },
        {
            value: 'scope',
            text: t('mainSurvey.q5a3')
        },
        {
            value: 'club',
            text: t('mainSurvey.q5a4')
        }]
    }

    const q6: Questions = {
        type: 'radiogroup',
        name: 'q6',
        title: t('mainSurvey.q6'),
        choices: [t('mainSurvey.q6a1'),
        t('mainSurvey.q6a2'),
        t('mainSurvey.q6a3'),
        t('mainSurvey.q6a4'),
        t('mainSurvey.q6a5'),
        ]
    }

    const q7: Questions = {
        type: 'radiogroup',
        name: 'q7',
        title: t('mainSurvey.q7'),
        choices: [t('mainSurvey.q7a1'),
        t('mainSurvey.q7a2'),
        t('mainSurvey.q7a3'),
        t('mainSurvey.q7a4')]
    }

    const q8: Questions = {
        type: "checkbox",
        name: 'q8',
        title: t('mainSurvey.q8'),
        choices: [t('mainSurvey.q8a1'),
        t('mainSurvey.q8a2'),
        t('mainSurvey.q8a3'),
        t('mainSurvey.q8a4'),
        t('mainSurvey.q8a5'),
        t('mainSurvey.q8a6'),
        t('mainSurvey.q8a7'),
        t('mainSurvey.q8a8'),
        t('mainSurvey.q8a9')]
    }

    const q9: Questions = {
        type: 'radiogroup',
        name: 'q9',
        title: t('mainSurvey.q9'),
        choices: [t('mainSurvey.q9a1'),
        t('mainSurvey.q9a2'),
        t('mainSurvey.q9a3'),
        t('mainSurvey.q9a4')]
    }

    const q10: Questions = {
        type: 'text',
        name: 'q10',
        title: t('mainSurvey.q10'),
    }

    const q11: Questions = {
        type: 'text',
        name: 'q11',
        title: t('mainSurvey.q11')
    }

    const q12: Questions = {
        type: 'matrix',
        name: 'q12',
        title: t('mainSurvey.q12'),
        columns: [{
            value: 1,
            text: t('mainSurvey.q12c1')
        },
        {
            value: 2,
            text: t('mainSurvey.q12c2')
        },
        {
            value: 3,
            text: t('mainSurvey.q12c3')
        },
        {
            value: 4,
            text: t('mainSurvey.q12c4')
        },
        {
            value: 5,
            text: t('mainSurvey.q12c5')
        },
        ],
        rows: [
            {
                value: '1',
                text: t('mainSurvey.q12a1')
            },
            {
                value: '2',
                text: t('mainSurvey.q12a2')
            },
            {
                value: '3',
                text: t('mainSurvey.q12a3')
            },
            {
                value: '4',
                text: t('mainSurvey.q12a4')
            },
            {
                value: '5',
                text: t('mainSurvey.q12a5')
            },
            {
                value: '6',
                text: t('mainSurvey.q12a6')
            },
            {
                value: '7',
                text: t('mainSurvey.q12a7')
            },
            {
                value: '8',
                text: t('mainSurvey.q12a8')
            },
            {
                value: '9',
                text: t('mainSurvey.q12a9')
            },
            {
                value: '10',
                text: t('mainSurvey.q12a10')
            },
            {
                value: '11',
                text: t('mainSurvey.q12a11')
            },
            {
                value: '12',
                text: t('mainSurvey.q12a12')
            },
            {
                value: '13',
                text: t('mainSurvey.q12a13')
            },
            {
                value: '14',
                text: t('mainSurvey.q12a14')
            },


        ]
    }

    const q13: Questions = {
        type: 'radiogroup',
        name: 'q13',
        title: t('mainSurvey.q13'),
        choices: [t('mainSurvey.q13a1'),
        t('mainSurvey.q13a2'),
        t('mainSurvey.q13a3'),
        t('mainSurvey.q13a4')]
    }

    const q14: Questions = {
        type: 'text',
        name: 'q14',
        title: t('mainSurvey.q14')
    }

    const q15: Questions = {
        type: 'matrix',
        name: 'q15',
        title: t('mainSurvey.q15'),
        columns: [{
            value: 1,
            text: t('mainSurvey.q15c1')
        },
        {
            value: 2,
            text: t('mainSurvey.q15c2')
        },
        {
            value: 3,
            text: t('mainSurvey.q15c3')
        },
        {
            value: 4,
            text: t('mainSurvey.q15c4')
        },
        {
            value: 5,
            text: t('mainSurvey.q15c5')
        },
        ],
        rows: [{
            value: '1',
            text: t('mainSurvey.q15a1')
        },
        {
            value: '2',
            text: t('mainSurvey.q15a2')
        },
        {
            value: '3',
            text: t('mainSurvey.q15a3')
        },
        {
            value: '4',
            text: t('mainSurvey.q15a4')
        },
        {
            value: '5',
            text: t('mainSurvey.q15a5')
        },
        {
            value: '6',
            text: t('mainSurvey.q15a6')
        },
        {
            value: '7',
            text: t('mainSurvey.q15a7')
        },
        {
            value: '8',
            text: t('mainSurvey.q15a8')
        },
        {
            value: '9',
            text: t('mainSurvey.q15a9')
        },
        {
            value: '10',
            text: t('mainSurvey.q15a10')
        },
        {
            value: '11',
            text: t('mainSurvey.q15a11')
        },
        {
            value: '12',
            text: t('mainSurvey.q15a12')
        },
        ]

    }

    const q16: Questions = {
        type: 'matrix',
        name: 'q16',
        title: t('mainSurvey.q16'),
        columns: [{
            value: 1,
            text: t('mainSurvey.q16c1')
        },
        {
            value: 2,
            text: t('mainSurvey.q16c2')
        },
        {
            value: 3,
            text: t('mainSurvey.q16c3')
        },
        {
            value: 4,
            text: t('mainSurvey.q16c4')
        },
        ],
        rows: [{
            value: '1',
            text: t('mainSurvey.q16a1')
        },
        {
            value: '2',
            text: t('mainSurvey.q16a2')
        },
        {
            value: '3',
            text: t('mainSurvey.q16a3')
        },
        {
            value: '4',
            text: t('mainSurvey.q16a4')
        },
        {
            value: '5',
            text: t('mainSurvey.q16a5')
        },
        {
            value: '6',
            text: t('mainSurvey.q16a6')
        },
        {
            value: '7',
            text: t('mainSurvey.q16a7')
        },
        {
            value: '8',
            text: t('mainSurvey.q16a8')
        },
        {
            value: '9',
            text: t('mainSurvey.q16a9')
        },
        ]
    }

    const q17: Questions = {
        type: 'matrix',
        name: 'q17',
        title: t('mainSurvey.q17'),
        columns: [{
            value: 1,
            text: t('mainSurvey.q17c1')
        },
        {
            value: 2,
            text: t('mainSurvey.q17c2')
        },
        {
            value: 3,
            text: t('mainSurvey.q17c3')
        },
        {
            value: 4,
            text: t('mainSurvey.q17c4')
        },
        ],
        rows: [{
            value: '1',
            text: t('mainSurvey.q17a1')
        },
        {
            value: '2',
            text: t('mainSurvey.q17a2')
        },
        {
            value: '3',
            text: t('mainSurvey.q17a3')
        },
        {
            value: '4',
            text: t('mainSurvey.q17a4')
        },

        ]
    }

    const q18: Questions = {
        type: 'radiogroup',
        name: 'q18',
        title: t('mainSurvey.q18'),
        choices: [t('mainSurvey.q18a1'),
        t('mainSurvey.q18a2'),
        t('mainSurvey.q18a3'),
        t('mainSurvey.q18a4')]
    }

    const q19: Questions = {
        type: 'radiogroup',
        name: 'q19',
        title: t('mainSurvey.q19'),
        choices: [t('mainSurvey.q19a1'),
        t('mainSurvey.q19a2'),
        t('mainSurvey.q19a3'),
        t('mainSurvey.q19a4')]
    }

    const q20: Questions = {
        type: 'text',
        name: 'q20',
        title: t('mainSurvey.q20')
    }
    const q21: Questions = {
        type: 'radiogroup',
        name: 'q21',
        title: t('mainSurvey.q21'),
        choices: [t('mainSurvey.q21a1'),
        t('mainSurvey.q21a2'),
        t('mainSurvey.q21a3'),
        t('mainSurvey.q21a4'),
        t('mainSurvey.q21a5'),
        t('mainSurvey.q21a6'),
        t('mainSurvey.q21a7'),
        t('mainSurvey.q21a8'),
        t('mainSurvey.q21a9'),
        t('mainSurvey.q21a10'),
        ]
    }
    const q22: Questions = {
        type: 'radiogroup',
        name: 'q22',
        title: t('mainSurvey.q22'),
        choices: [t('mainSurvey.q22a1'),
        t('mainSurvey.q22a2'),
        t('mainSurvey.q22a3'),
        t('mainSurvey.q22a4'),
        t('mainSurvey.q22a5'),
        t('mainSurvey.q22a6'),
        t('mainSurvey.q22a7'),
        t('mainSurvey.q22a8'),
        t('mainSurvey.q22a9'),
        ]
    }
    const q23: Questions = {
        type: 'radiogroup',
        name: 'q23',
        title: t('mainSurvey.q23'),
        choices: [t('mainSurvey.q23a1'),
        t('mainSurvey.q23a2'),
        t('mainSurvey.q23a3'),
        t('mainSurvey.q23a4'),
        ]
    }
    const q24: Questions = {
        type: 'radiogroup',
        name: 'q24',
        title: t('mainSurvey.q24'),
        choices: [t('mainSurvey.q24a1'),
        t('mainSurvey.q24a2'),
        t('mainSurvey.q24a3'),
        ]
    }
    const q25: Questions = {
        type: 'radiogroup',
        name: 'q25',
        title: t('mainSurvey.q25'),
        choices: [t('mainSurvey.q25a1'),
        t('mainSurvey.q25a2'),
        t('mainSurvey.q25a3'),
        t('mainSurvey.q25a4'),
        ]
    }
    const q26: Questions = {
        type: 'radiogroup',
        name: 'q26',
        title: t('mainSurvey.q26'),
        choices: [t('mainSurvey.q26a1'),
        t('mainSurvey.q26a2'),
        t('mainSurvey.q26a3'),
        t('mainSurvey.q26a4'),
        ]
    }
    const q27: Questions = {
        type: 'radiogroup',
        name: 'q27',
        title: t('mainSurvey.q27'),
        choices: [t('mainSurvey.q27a1'),
        t('mainSurvey.q27a2'),
        t('mainSurvey.q27a3'),
        t('mainSurvey.q27a4'),
        t('mainSurvey.q27a5'),
        t('mainSurvey.q27a6'),
        ]
    }
    const q28: Questions = {
        type: 'radiogroup',
        name: 'q28',
        title: t('mainSurvey.q28'),
        choices: [t('mainSurvey.q28a1'),
        t('mainSurvey.q28a2'),
        t('mainSurvey.q28a3'),
        t('mainSurvey.q28a4'),
        t('mainSurvey.q28a5'),
        t('mainSurvey.q28a6'),
        ]
    }
    const q29: Questions = {
        type: 'radiogroup',
        name: 'q29',
        title: t('mainSurvey.q29'),
        choices: [t('mainSurvey.q29a1'),
        t('mainSurvey.q29a2'),
        t('mainSurvey.q29a3'),
        ]
    }
    const q30: Questions = {
        type: 'radiogroup',
        name: 'q30',
        title: t('mainSurvey.q30'),
        choices: [t('mainSurvey.q30a1'),
        t('mainSurvey.q30a2'),
        t('mainSurvey.q30a3'),
        ]
    }



    const json = {
        "completeText": "Submit",
        showPrevButton: false,
        startTimer: true,
        "pages": [
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q1, q2, q3
                        ],
                        "name": "panel1"
                    }
                ],
                "name": "page0"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q4, q5, q6
                        ],
                        "name": "panel2"
                    }
                ],
                "name": "page1"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q7, q8, q9
                        ],
                        "name": "panel3"
                    }
                ],
                "name": "page2"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q10, q11, q12
                        ],
                        "name": "panel4"
                    }
                ],
                "name": "page3"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q13, q14, q15
                        ],
                        "name": "panel5"
                    }
                ],
                "name": "page4"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q16, q17, q18
                        ],
                        "name": "panel5"
                    }
                ],
                "name": "page5"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q19, q20, q21
                        ],
                        "name": "panel6"
                    }
                ],
                "name": "page6"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q22, q23, q24
                        ],
                        "name": "panel7"
                    }
                ],
                "name": "page7"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q25, q26, q27
                        ],
                        "name": "panel8"
                    }
                ],
                "name": "page8"
            },
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q28, q29, q30
                        ],
                        "name": "panel9"
                    }
                ],
                "name": "page9"
            },
        ],
        mode: "edit"
    }

    return json
}


export default JSON