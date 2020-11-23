import React from 'react'
import * as Survey from 'survey-react'
import { Questions, MatrixObject } from '../types/types'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SurveyQuestions = () => {
    const { t } = useTranslation()
    const q1: Questions = {
        type: 'matrix',
        name: 'q5',
        title: t('postSurvey.q1'),
        columns: [{
            value: 1,
            text: t('postSurvey.q1c1')
        },
        {
            value: 2,
            text: t('postSurvey.q1c2')
        },
        {
            value: 3,
            text: t('postSurvey.q1c3')
        },
        {
            value: 3,
            text: t('postSurvey.q1c4')
        },
        {
            value: 3,
            text: t('postSurvey.q1c5')
        }],
        rows: [{
            value: 'spare',
            text: t('postSurvey.q1a1'),
        },
        {
            value: 'active',
            text: t('postSurvey.q1a2'),
        },
        {
            value: 'scope',
            text: t('postSurvey.q1a3'),
        },
        {
            value: 'a',
            text: t('postSurvey.q1a4'),
        },
        {
            value: 'b',
            text: t('postSurvey.q1a5'),
        },
        {
            value: 'c',
            text: t('postSurvey.q1a6'),
        },
        {
            value: 'd',
            text: t('postSurvey.q1a7'),
        },
        {
            value: 'e',
            text: t('postSurvey.q1a8'),
        },
        {
            value: 'f',
            text: t('postSurvey.q1a9'),
        },
        {
            value: 'g',
            text: t('postSurvey.q1a10'),
        },
        ]
    }

    const q2: Questions = {
        type: 'matrix',
        name: 'q2',
        title: t('postSurvey.q2'),
        columns: [{
            value: 1,
            text: t('postSurvey.q2c1')
        },
        {
            value: 2,
            text: t('postSurvey.q2c2')
        },
        {
            value: 3,
            text: t('postSurvey.q2c3')
        },
        {
            value: 4,
            text: t('postSurvey.q2c4')
        },
        {
            value: 5,
            text: t('postSurvey.q2c5')
        },
        {
            value: 6,
            text: t('postSurvey.q2c6')
        },
        {
            value: 7,
            text: t('postSurvey.q2c7')
        }],
        rows: [{
            value: 'a',
            text: t('postSurvey.q2a1')
        },
        {
            value: 'b',
            text: t('postSurvey.q2a2'),
        },
        {
            value: 'c',
            text: t('postSurvey.q2a3')
        },
        {
            value: 'd',
            text: t('postSurvey.q2a4')
        },
        {
            value: 'e',
            text: t('postSurvey.q2a5')
        },
        {
            value: 'f',
            text: t('postSurvey.q2a6'),
        },
        {
            value: 'g',
            text: t('postSurvey.q2a7')
        },
        {
            value: 'h',
            text: t('postSurvey.q2a8')
        },
        {
            value: 'i',
            text: t('postSurvey.q2a9')
        },
        {
            value: 'j',
            text: t('postSurvey.q2a10'),
        },
        {
            value: 'k',
            text: t('postSurvey.q2a11')
        },
        {
            value: 'l',
            text: t('postSurvey.q2a12')
        },
        {
            value: 'm',
            text: t('postSurvey.q2a13')
        },
        {
            value: 'n',
            text: t('postSurvey.q2a14'),
        },
        {
            value: 'o',
            text: t('postSurvey.q2a15')
        },
        {
            value: 'p',
            text: t('postSurvey.q2a16')
        },
        {
            value: 'q',
            text: t('postSurvey.q2a17')
        },
        {
            value: 'r',
            text: t('postSurvey.q2a18'),
        },
        {
            value: 's',
            text: t('postSurvey.q2a19')
        },
        {
            value: 't',
            text: t('postSurvey.q2a20')
        },
        {
            value: 'u',
            text: t('postSurvey.q2a21')
        },
        {
            value: 'v',
            text: t('postSurvey.q2a22'),
        },
        {
            value: 'w',
            text: t('postSurvey.q2a23')
        },
        {
            value: 'x',
            text: t('postSurvey.q2a24')
        },
        {
            value: 'y',
            text: t('postSurvey.q2a25')
        },
        ]
    }
    const q3: Questions = {
        type: 'matrix',
        name: 'q3',
        title: t('postSurvey.q3'),
        columns: [t('postSurvey.q3c1'), t('postSurvey.q3c2'), t('postSurvey.q3c3'), t('postSurvey.q3c4'), t('postSurvey.q3c5'),],
        rows: [t('postSurvey.q3a1'), t('postSurvey.q3a2'), t('postSurvey.q3a3'), t('postSurvey.q3a4')]
    }
    const q4: Questions = {
        type: 'text',
        name: 'q4',
        title: t('postSurvey.q4')
    }
    const q5: Questions = {
        type: 'text',
        name: 'q5',
        title: t('postSurvey.q5')
    }
    const q6: Questions = {
        type: 'text',
        name: 'q6',
        title: t('postSurvey.q6')
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
                            q1, q2, q3, q4, q5, q6
                        ],
                        "name": "panel1"
                    }
                ],
                "name": "page0"
            },
        ],
        mode: 'edit'
    }

    return (
        <Survey.Survey json={json} />
    )
}
export default SurveyQuestions 