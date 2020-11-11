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

    const json = {
        "completeText": "Submit",
        showPrevButton: false,
        "pages": [
            {
                "elements": [
                    {
                        "type": "panel",
                        "elements": [
                            q1,
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