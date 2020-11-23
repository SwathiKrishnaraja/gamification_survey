import { Questions, MatrixObject } from '../../types/types'
import { useTranslation } from 'react-i18next'

const JSON = () => {
    const { t } = useTranslation()
    const q1: Questions = {
        type: 'matrix',
        name: 'q5',
        title: t('preSurvey.q1'),
        columns: [{
            value: 1,
            text: t('preSurvey.q1c1')
        },
        {
            value: 2,
            text: t('preSurvey.q1c2')
        },
        {
            value: 3,
            text: t('preSurvey.q1c3')
        },
        {
            value: 4,
            text: t('preSurvey.q1c4')
        },
        {
            value: 5,
            text: t('preSurvey.q1c5')
        }],
        rows: [{
            value: 'spare',
            text: t('preSurvey.q1a1')
        },
        {
            value: 'active',
            text: t('preSurvey.q1a2')
        },
        {
            value: 'scope',
            text: t('preSurvey.q1a3')
        },
        {
            value: 'kgf',
            text: t('preSurvey.q1a4')
        },
        {
            value: 'rocky',
            text: t('preSurvey.q1a5')
        },
        {
            value: 'gotu',
            text: t('preSurvey.q1a6')
        },
        {
            value: 'von',
            text: t('preSurvey.q1a7')
        },
        {
            value: 'goundermann',
            text: t('preSurvey.q1a8')
        },
        {
            value: 'kongu',
            text: t('preSurvey.q1a9')
        },
        {
            value: 'satchki',
            text: t('preSurvey.q1a10')
        },
        ]
    }
    const q2: Questions = {
        type: 'matrix',
        name: 'q2',
        title: t('preSurvey.q2'),
        columns: [{
            value: 1,
            text: t('preSurvey.q2c1')
        },
        {
            value: 2,
            text: t('preSurvey.q2c2')
        },
        {
            value: 3,
            text: t('preSurvey.q2c3')
        },
        {
            value: 4,
            text: t('preSurvey.q2c4')
        },
        {
            value: 5,
            text: t('preSurvey.q2c5')
        },
        {
            value: 6,
            text: t('preSurvey.q2c6')
        },
        {
            value: 7,
            text: t('preSurvey.q2c7')
        }
        ],
        rows: [{
            value: 'spare',
            text: t('preSurvey.q2a1')
        },
        {
            value: 'active',
            text: t('preSurvey.q2a2')
        },
        {
            value: 'scope',
            text: t('preSurvey.q2a3')
        },
        {
            value: 'kgf',
            text: t('preSurvey.q2a4')
        },
        {
            value: 'rocky',
            text: t('preSurvey.q2a5')
        },
        {
            value: 'gotu',
            text: t('preSurvey.q2a6')
        },
        {
            value: 'von',
            text: t('preSurvey.q2a7')
        },
        {
            value: 'goundermann',
            text: t('preSurvey.q2a8')
        },
        {
            value: 'kongu',
            text: t('preSurvey.q2a9')
        },
        {
            value: 'satchki',
            text: t('preSurvey.q2a10')
        },
        {
            value: 'a',
            text: t('preSurvey.q2a11')
        },
        {
            value: 'b',
            text: t('preSurvey.q2a12')
        },
        {
            value: 'c',
            text: t('preSurvey.q2a13')
        },
        {
            value: 'd',
            text: t('preSurvey.q2a14')
        },
        {
            value: 'e',
            text: t('preSurvey.q2a15')
        },
        {
            value: 'f',
            text: t('preSurvey.q2a16')
        },
        {
            value: 'g',
            text: t('preSurvey.q2a17')
        },
        {
            value: 'h',
            text: t('preSurvey.q2a18')
        },
        {
            value: 'i',
            text: t('preSurvey.q2a19')
        },
        {
            value: 'j',
            text: t('preSurvey.q2a20')
        },
        {
            value: 'k',
            text: t('preSurvey.q2a21')
        },
        {
            value: 'l',
            text: t('preSurvey.q2a22')
        },
        {
            value: 'm',
            text: t('preSurvey.q2a23')
        },
        {
            value: 'n',
            text: t('preSurvey.q2a24')
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
                            q1, q2
                        ],
                        "name": "panel1"
                    }
                ],
                "name": "page0"
            },
        ],
        mode: 'edit'
    }

    return json
}
export default JSON