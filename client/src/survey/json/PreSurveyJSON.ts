import { Questions, MatrixObject } from '../../types/types'
import { useTranslation } from 'react-i18next'
import shuffle from '../../helpers/shuffle'


const shuffledQ1 = shuffle(10)
const shuffledQ2 = shuffle(24)

const JSON = () => {
    const { t } = useTranslation()
    const q1: Questions = {
        type: 'matrix',
        name: 'q5',
        title: t('preSurvey.q1'),
        isAllRowRequired: true,
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
            value: t(`preSurvey.q1a${shuffledQ1[0]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[0]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[1]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[1]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[2]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[2]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[3]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[3]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[4]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[4]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[5]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[5]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[6]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[6]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[7]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[7]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[8]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[8]}`)
        },
        {
            value: t(`preSurvey.q1a${shuffledQ1[9]}`)!,
            text: t(`preSurvey.q1a${shuffledQ1[9]}`)
        },
        ]
    }

    const q2: Questions = {
        type: 'matrix',
        name: 'q2',
        title: t('preSurvey.q2'),
        isAllRowRequired: true,
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
            value: t(`preSurvey.q2a${shuffledQ2[0]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[0]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[1]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[1]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[2]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[2]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[3]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[3]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[4]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[4]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[5]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[5]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[6]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[6]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[7]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[7]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[8]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[8]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[9]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[9]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[10]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[10]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[11]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[11]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[12]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[12]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[13]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[13]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[14]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[14]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[15]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[15]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[16]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[16]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[17]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[17]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[18]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[18]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[19]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[19]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[20]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[20]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[21]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[21]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[22]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[22]}`)
        },
        {
            value: t(`preSurvey.q2a${shuffledQ2[23]}`)!,
            text: t(`preSurvey.q2a${shuffledQ2[23]}`)
        },
        ]
    }

    const json = {
        "completeText": "Submit",
        showPrevButton: false,
        showCompletedPage: false,
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