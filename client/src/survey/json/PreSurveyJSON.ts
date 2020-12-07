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
        isRequired: true,
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
            value: 'spare',
            text: t(`preSurvey.q1a${shuffledQ1[0]}`)
        },
        {
            value: 'active',
            text: t(`preSurvey.q1a${shuffledQ1[1]}`)
        },
        {
            value: 'scope',
            text: t(`preSurvey.q1a${shuffledQ1[2]}`)
        },
        {
            value: 'kgf',
            text: t(`preSurvey.q1a${shuffledQ1[3]}`)
        },
        {
            value: 'rocky',
            text: t(`preSurvey.q1a${shuffledQ1[4]}`)
        },
        {
            value: 'gotu',
            text: t(`preSurvey.q1a${shuffledQ1[5]}`)
        },
        {
            value: 'von',
            text: t(`preSurvey.q1a${shuffledQ1[6]}`)
        },
        {
            value: 'goundermann',
            text: t(`preSurvey.q1a${shuffledQ1[7]}`)
        },
        {
            value: 'kongu',
            text: t(`preSurvey.q1a${shuffledQ1[8]}`)
        },
        {
            value: 'satchki',
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
            value: 'spare',
            text: t(`preSurvey.q2a${shuffledQ2[0]}`)
        },
        {
            value: 'active',
            text: t(`preSurvey.q2a${shuffledQ2[1]}`)
        },
        {
            value: 'scope',
            text: t(`preSurvey.q2a${shuffledQ2[2]}`)
        },
        {
            value: 'kgf',
            text: t(`preSurvey.q2a${shuffledQ2[3]}`)
        },
        {
            value: 'rocky',
            text: t(`preSurvey.q2a${shuffledQ2[4]}`)
        },
        {
            value: 'gotu',
            text: t(`preSurvey.q2a${shuffledQ2[5]}`)
        },
        {
            value: 'von',
            text: t(`preSurvey.q2a${shuffledQ2[6]}`)
        },
        {
            value: 'goundermann',
            text: t(`preSurvey.q2a${shuffledQ2[7]}`)
        },
        {
            value: 'kongu',
            text: t(`preSurvey.q2a${shuffledQ2[8]}`)
        },
        {
            value: 'satchki',
            text: t(`preSurvey.q2a${shuffledQ2[9]}`)
        },
        {
            value: 'a',
            text: t(`preSurvey.q2a${shuffledQ2[10]}`)
        },
        {
            value: 'b',
            text: t(`preSurvey.q2a${shuffledQ2[11]}`)
        },
        {
            value: 'c',
            text: t(`preSurvey.q2a${shuffledQ2[12]}`)
        },
        {
            value: 'd',
            text: t(`preSurvey.q2a${shuffledQ2[13]}`)
        },
        {
            value: 'e',
            text: t(`preSurvey.q2a${shuffledQ2[14]}`)
        },
        {
            value: 'f',
            text: t(`preSurvey.q2a${shuffledQ2[15]}`)
        },
        {
            value: 'g',
            text: t(`preSurvey.q2a${shuffledQ2[16]}`)
        },
        {
            value: 'h',
            text: t(`preSurvey.q2a${shuffledQ2[17]}`)
        },
        {
            value: 'i',
            text: t(`preSurvey.q2a${shuffledQ2[18]}`)
        },
        {
            value: 'j',
            text: t(`preSurvey.q2a${shuffledQ2[19]}`)
        },
        {
            value: 'k',
            text: t(`preSurvey.q2a${shuffledQ2[20]}`)
        },
        {
            value: 'l',
            text: t(`preSurvey.q2a${shuffledQ2[21]}`)
        },
        {
            value: 'm',
            text: t(`preSurvey.q2a${shuffledQ2[22]}`)
        },
        {
            value: 'n',
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