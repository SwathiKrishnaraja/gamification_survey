
import { Questions, MatrixObject } from '../types/types'
import { useTranslation } from 'react-i18next'
import shuffle from '../helpers/shuffle'

const shuffledQ1 = shuffle(10)
const shuffledQ2 = shuffle(25)

const GenericSurveyQuestions = () => {
    const { t } = useTranslation()
    const q1: Questions = {
        type: 'matrix',
        name: 'q1',
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
        title: t('postSurvey.q2'),
        isAllRowRequired: true,
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
            value: t(`postSurvey.q2a${shuffledQ2[0]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[0]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[1]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[1]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[2]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[2]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[3]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[3]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[4]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[4]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[5]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[5]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[6]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[6]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[7]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[7]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[8]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[8]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[9]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[9]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[10]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[10]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[11]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[11]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[12]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[12]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[13]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[13]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[14]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[14]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[15]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[15]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[16]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[16]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[17]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[17]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[18]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[18]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[19]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[19]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[20]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[20]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[21]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[21]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[22]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[22]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[23]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[23]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[24]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[24]}`)
        },
        ]
    }

    const q3: Questions = {
        type: 'matrix',
        name: 'q3',
        title: t('postSurvey.q3'),
        isRequired: true,
        columns: [t('postSurvey.q3c1'), t('postSurvey.q3c2'), t('postSurvey.q3c3'), t('postSurvey.q3c4'), t('postSurvey.q3c5'),],
        rows: [t('postSurvey.q3a1'), t('postSurvey.q3a2'), t('postSurvey.q3a3'), t('postSurvey.q3a4')]
    }
    const q4: Questions = {
        type: 'text',
        name: 'q4',
        isRequired: true,
        title: t('postSurvey.q4')
    }
    const q5: Questions = {
        type: 'text',
        name: 'q5',
        isRequired: true,
        title: t('postSurvey.q5')
    }
    const q6: Questions = {
        type: 'text',
        name: 'q6',
        isRequired: true,
        title: t('postSurvey.q6')
    }

    const q7: Questions = {
        type: 'radiogroup',
        name: 'q7',
        isRequired: true,
        title: t('postSurvey.q7'),
        choices: [
            t('postSurvey.q7c1'),
            t('postSurvey.q7c2'),
            t('postSurvey.q7c3'),
            t('postSurvey.q7c4'),
            t('postSurvey.q7c5'),
        ]
    }

    const q8: Questions = {
        type: 'radiogroup',
        name: 'q8',
        isRequired: true,
        title: t('postSurvey.q8'),
        choices: [
            t('postSurvey.q8c1'),
            t('postSurvey.q8c2'),
            t('postSurvey.q8c3'),
            t('postSurvey.q8c4'),
            t('postSurvey.q8c5'),
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
                            q1, q2, q3, q4, q5, q6, q7, q8
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

const GamifiedSurveyQuestions = () => {
    const { t } = useTranslation()
    const q1: Questions = {
        type: 'matrix',
        name: 'q1',
        title: t('postSurvey.q1'),
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
        title: t('postSurvey.q2'),
        isAllRowRequired: true,
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
            value: t(`postSurvey.q2a${shuffledQ2[0]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[0]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[1]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[1]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[2]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[2]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[3]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[3]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[4]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[4]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[5]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[5]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[6]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[6]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[7]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[7]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[8]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[8]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[9]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[9]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[10]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[10]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[11]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[11]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[12]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[12]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[13]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[13]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[14]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[14]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[15]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[15]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[16]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[16]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[17]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[17]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[18]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[18]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[19]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[19]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[20]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[20]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[21]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[21]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[22]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[22]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[23]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[23]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[24]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[24]}`)
        },
        ]
    }

    const q3: Questions = {
        type: 'matrix',
        name: 'q3',
        isRequired: true,
        title: t('postSurvey.q3'),
        columns: [t('postSurvey.q3c1'), t('postSurvey.q3c2'), t('postSurvey.q3c3'), t('postSurvey.q3c4'), t('postSurvey.q3c5'),],
        rows: [t('postSurvey.q3a1'), t('postSurvey.q3a2'), t('postSurvey.q3a3'), t('postSurvey.q3a4')]
    }
    const q4: Questions = {
        type: 'text',
        name: 'q4',
        isRequired: true,
        title: t('postSurvey.q4')
    }
    const q5: Questions = {
        type: 'text',
        name: 'q5',
        isRequired: true,
        title: t('postSurvey.q5')
    }
    const q6: Questions = {
        type: 'text',
        name: 'q6',
        isRequired: true,
        title: t('postSurvey.q6')
    }

    const q7: Questions = {
        type: 'radiogroup',
        name: 'q7',
        isRequired: true,
        title: t('selfReportGamification.q1'),
        choices: [
            t('selfReportGamification.q1c1'),
            t('selfReportGamification.q1c2'),
            t('selfReportGamification.q1c3'),
            t('selfReportGamification.q1c4'),
            t('selfReportGamification.q1c5'),
        ]
    }

    const q8: Questions = {
        type: 'radiogroup',
        name: 'q8',
        isRequired: true,
        title: t('selfReportGamification.q2'),
        choices: [
            t('selfReportGamification.q2c1'),
            t('selfReportGamification.q2c2'),
            t('selfReportGamification.q2c3'),
            t('selfReportGamification.q2c4'),
            t('selfReportGamification.q2c5'),
        ]
    }
    const q9: Questions = {
        type: 'radiogroup',
        name: 'q9',
        isRequired: true,
        title: t('selfReportGamification.q3'),
        choices: [
            t('selfReportGamification.q3c1'),
            t('selfReportGamification.q3c2'),
            t('selfReportGamification.q3c3'),
            t('selfReportGamification.q3c4'),
            t('selfReportGamification.q3c5'),
        ]
    }

    const q10: Questions = {
        type: 'text',
        name: 'q10',
        isRequired: true,
        title: t('selfReportGamification.q4')
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
                            q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
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

const TraditionalGamifiedQuestions = () => {
    const { t } = useTranslation()
    const q1: Questions = {
        type: 'matrix',
        name: 'q1',
        title: t('postSurvey.q1'),
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
        title: t('postSurvey.q2'),
        isAllRowRequired: true,
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
            value: t(`postSurvey.q2a${shuffledQ2[0]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[0]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[1]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[1]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[2]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[2]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[3]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[3]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[4]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[4]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[5]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[5]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[6]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[6]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[7]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[7]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[8]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[8]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[9]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[9]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[10]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[10]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[11]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[11]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[12]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[12]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[13]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[13]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[14]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[14]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[15]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[15]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[16]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[16]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[17]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[17]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[18]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[18]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[19]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[19]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[20]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[20]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[21]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[21]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[22]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[22]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[23]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[23]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[24]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[24]}`)
        },
        ]
    }

    const q3: Questions = {
        type: 'matrix',
        name: 'q3',
        title: t('postSurvey.q3'),
        isRequired: true,
        columns: [t('postSurvey.q3c1'), t('postSurvey.q3c2'), t('postSurvey.q3c3'), t('postSurvey.q3c4'), t('postSurvey.q3c5'),],
        rows: [t('postSurvey.q3a1'), t('postSurvey.q3a2'), t('postSurvey.q3a3'), t('postSurvey.q3a4')]
    }
    const q4: Questions = {
        type: 'text',
        name: 'q4',
        isRequired: true,
        title: t('postSurvey.q4')
    }
    const q5: Questions = {
        type: 'text',
        name: 'q5',
        isRequired: true,
        title: t('postSurvey.q5')
    }
    const q6: Questions = {
        type: 'text',
        name: 'q6',
        isRequired: true,
        title: t('postSurvey.q6')
    }

    const q7: Questions = {
        type: 'radiogroup',
        name: 'q7',
        isRequired: true,
        title: t('selfReportChoiceEnableDisable.q1'),
        choices: [
            t('selfReportChoiceEnableDisable.q1c1'),
            t('selfReportChoiceEnableDisable.q1c2'),
            t('selfReportChoiceEnableDisable.q1c3'),
            t('selfReportChoiceEnableDisable.q1c4'),
            t('selfReportChoiceEnableDisable.q1c5'),
        ]
    }

    const q8: Questions = {
        type: 'radiogroup',
        name: 'q8',
        isRequired: true,
        title: t('selfReportChoiceEnableDisable.q2'),
        choices: [
            t('selfReportChoiceEnableDisable.q2c1'),
            t('selfReportChoiceEnableDisable.q2c2'),
            t('selfReportChoiceEnableDisable.q2c3'),
            t('selfReportChoiceEnableDisable.q2c4'),
            t('selfReportChoiceEnableDisable.q2c5'),
        ]
    }
    const q9: Questions = {
        type: 'text',
        name: 'q9',
        isRequired: true,
        title: t('selfReportChoiceEnableDisable.q3')
    }
    const q10: Questions = {
        type: 'text',
        name: 'q10',
        isRequired: true,
        title: t('selfReportChoiceEnableDisable.q4')
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
                            q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
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

const GamifiedChoiceQuestions = () => {
    const { t } = useTranslation()
    const q1: Questions = {
        type: 'matrix',
        name: 'q1',
        title: t('postSurvey.q1'),
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
        title: t('postSurvey.q2'),
        isAllRowRequired: true,
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
            value: t(`postSurvey.q2a${shuffledQ2[0]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[0]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[1]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[1]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[2]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[2]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[3]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[3]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[4]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[4]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[5]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[5]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[6]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[6]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[7]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[7]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[8]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[8]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[9]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[9]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[10]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[10]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[11]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[11]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[12]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[12]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[13]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[13]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[14]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[14]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[15]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[15]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[16]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[16]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[17]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[17]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[18]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[18]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[19]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[19]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[20]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[20]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[21]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[21]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[22]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[22]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[23]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[23]}`)
        },
        {
            value: t(`postSurvey.q2a${shuffledQ2[24]}`)!,
            text: t(`postSurvey.q2a${shuffledQ2[24]}`)
        },
        ]
    }

    const q3: Questions = {
        type: 'matrix',
        name: 'q3',
        title: t('postSurvey.q3'),
        isRequired: true,
        columns: [t('postSurvey.q3c1'), t('postSurvey.q3c2'), t('postSurvey.q3c3'), t('postSurvey.q3c4'), t('postSurvey.q3c5'),],
        rows: [t('postSurvey.q3a1'), t('postSurvey.q3a2'), t('postSurvey.q3a3'), t('postSurvey.q3a4')]
    }
    const q4: Questions = {
        type: 'text',
        name: 'q4',
        isRequired: true,
        title: t('postSurvey.q4')
    }
    const q5: Questions = {
        type: 'text',
        name: 'q5',
        isRequired: true,
        title: t('postSurvey.q5')
    }
    const q6: Questions = {
        type: 'text',
        name: 'q6',
        isRequired: true,
        title: t('postSurvey.q6')
    }

    const q7: Questions = {
        type: 'radiogroup',
        name: 'q7',
        isRequired: true,
        title: t('selfReportChoiceG1G2.q1'),
        choices: [
            t('selfReportChoiceG1G2.q1c1'),
            t('selfReportChoiceG1G2.q1c2'),
            t('selfReportChoiceG1G2.q1c3'),
            t('selfReportChoiceG1G2.q1c4'),
            t('selfReportChoiceG1G2.q1c5'),
        ]
    }

    const q8: Questions = {
        type: 'radiogroup',
        name: 'q8',
        isRequired: true,
        title: t('selfReportChoiceG1G2.q2'),
        choices: [
            t('selfReportChoiceG1G2.q2c1'),
            t('selfReportChoiceG1G2.q2c2'),
            t('selfReportChoiceG1G2.q2c3'),
            t('selfReportChoiceG1G2.q2c4'),
            t('selfReportChoiceG1G2.q2c5'),
        ]
    }
    const q9: Questions = {
        type: 'radiogroup',
        name: 'q9',
        isRequired: true,
        title: t('selfReportChoiceG1G2.q3'),
        choices: [
            t('selfReportChoiceG1G2.q3c1'),
            t('selfReportChoiceG1G2.q3c2'),
            t('selfReportChoiceG1G2.q3c3'),
            t('selfReportChoiceG1G2.q3c4'),
            t('selfReportChoiceG1G2.q3c5'),
        ]
    }

    const q10: Questions = {
        type: 'radiogroup',
        name: 'q10',
        isRequired: true,
        title: t('selfReportChoiceG1G2.q4'),
        choices: [
            t('selfReportChoiceG1G2.q4c1'),
            t('selfReportChoiceG1G2.q4c2'),
            t('selfReportChoiceG1G2.q4c3'),
            t('selfReportChoiceG1G2.q4c4'),
            t('selfReportChoiceG1G2.q4c5'),
        ]
    }

    const q11: Questions = {
        type: 'text',
        name: 'q11',
        isRequired: true,
        title: t('selfReportChoiceG1G2.q5')
    }

    const q12: Questions = {
        type: 'text',
        name: 'q12',
        isRequired: true,
        title: t('selfReportChoiceG1G2.q6')
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
                            q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12
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
export { GenericSurveyQuestions, GamifiedSurveyQuestions, TraditionalGamifiedQuestions, GamifiedChoiceQuestions }