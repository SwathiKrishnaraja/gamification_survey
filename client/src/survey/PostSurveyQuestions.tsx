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
        name: 'q5',
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
            value: 3,
            text: t('postSurvey.q2c4')
        },
        {
            value: 3,
            text: t('postSurvey.q2c5')
        }],
        rows: [{
            value: 'spare',
            text: t('postSurvey.q2a1')
        },
        {
            value: 'active',
            text: t('postSurvey.q2a2'),
        },
        {
            value: 'scope',
            text: t('postSurvey.q2a3')
        },
        {
            value: 'club',
            text: t('postSurvey.q2a4')
        },
        ]
    }
    const q3: Questions = {
        type: 'text',
        name: 'q3',
        title: t('postSurvey.q3')
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

    return (
        <Survey.Survey json={json} />
    )
}
export default SurveyQuestions 