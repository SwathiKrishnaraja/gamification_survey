import React from 'react'
import * as Survey from 'survey-react'
import { Questions, MatrixObject, Json } from '../types/types'
import { useHistory } from 'react-router-dom'

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
    type: "radiogroup",
    name: 'q2',
    title: 'And how would you rate yourself in all things, are you?',
    choices: ['Very athletic',
        'Rather sporty',
        'Rather not sporty',
        'Not athletic at all',
        'No Answer'],

}
const q3: Questions = {
    type: "radiogroup",
    name: 'q3',
    title: 'And how would you describe yourself? Are you...',
    choices: ['More sociable and likes to be around people',
        'Rather lonely and likes to be alone',
        'No Answer']
}

const q4: Questions = {
    type: 'radiogroup',
    name: 'q4',
    title: "Today's survey is about exercise and sport. This refers to ALL the physical activities you do. This can be either in a sports club or training in your free time. But it also includes daily activities in between (cycling to school/work, walking instead of driving,...) and if you do a lot of exercise during your education/job. In this sense, are you at least physically active from time to time?",
    choices: ['Yes', 'No', 'No Answer']
}

const q5: Questions = {
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
    },
    {
        value: 'active',
        text: 'I am active in my free time, but mostly spontaneously and without a fixed training goal'
    },
    {
        value: 'scope',
        text: 'I am physically active within the scope of school, my training or my job'
    },
    {
        value: 'club',
        text: 'I am active in one or more sports clubs'
    }]
}

const q6: Questions = {
    type: 'radiogroup',
    name: 'q6',
    title: 'How often are you physically active?',
    choices: ['several times a week',
        'Several times per month',
        'Approximately once a month',
        'Less than once a month',
        'No Answer',
    ]
}

const q7: Questions = {
    type: 'radiogroup',
    name: 'q7',
    title: 'And how would you rate your sporting and physical activities? Do you...',
    choices: ['Enough',
        'Rather too much',
        'Rather too little',
        'No response']
}

const q8: Questions = {
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

const q9: Questions = {
    type: 'radiogroup',
    name: 'q9',
    title: 'And when you are physically active, do you prefer to be active together with other people, or do you prefer to be alone?',
    choices: ['I prefer to be active with other people.',
        'I prefer to travel alone',
        'Likes both',
        'No Answer']
}

const q10: Questions = {
    type: 'text',
    name: 'q10',
    title: 'There is a variety of physical activities, from playing football to things like rafting, hiking and dancing. What do you do?',
}

const q11: Questions = {
    type: 'text',
    name: 'q11',
    title: 'Why are you physically active?'
}

const q12: Questions = {
    type: 'matrix',
    name: 'q12',
    title: 'Here are a few more reasons to be physically active, please indicate whether they apply to you very much, rather already, rather not or not at all.',
    columns: [{
        value: 1,
        text: 'Very true'
    },
    {
        value: 2,
        text: 'Somewhat true'
    },
    {
        value: 3,
        text: 'Rather not true'
    },
    {
        value: 4,
        text: 'Not applicable at all'
    },
    {
        value: 5,
        text: 'No answer'
    },
    ],
    rows: [
        {
            value: '1',
            text: 'It gives me a chance to think'
        },
        {
            value: '2',
            text: 'My friends push me to'
        },
        {
            value: '3',
            text: 'I like doing things with other people'
        },
        {
            value: '4',
            text: "It's a good way for me to relax"
        },
        {
            value: '5',
            text: 'I like to measure myself with others'
        },
        {
            value: '6',
            text: "It's healthy for me"
        },
        {
            value: '7',
            text: 'I want to be physically attractive'
        },
        {
            value: '8',
            text: 'I can gain strength for everyday life'
        },
        {
            value: '9',
            text: 'I have time for myself'
        },
        {
            value: '10',
            text: "It's fun"
        },
        {
            value: '11',
            text: 'I get to know my limits'
        },
        {
            value: '12',
            text: 'My parents push me to'
        },
        {
            value: '13',
            text: 'I can show what I can do'
        },
        {
            value: '14',
            text: 'It helps me to relax and relieve stress'
        },


    ]
}

const q13: Questions = {
    type: 'radiogroup',
    name: 'q13',
    title: "What's your circle of friends like? Are the people in your circle of friends, all things considered...",
    choices: ['Physically more active than you',
        'About as physically active as you',
        'Physically less active than you',
        'No Answer']
}

const q14: Questions = {
    type: 'text',
    name: 'q14',
    title: 'Why are you not physically active?'
}

const q15: Questions = {
    type: 'matrix',
    name: 'q15',
    title: 'Here are a few more reasons to be physically active, please indicate whether they apply to you very much, rather already, rather not or not at all.',
    columns: [{
        value: 1,
        text: 'Very true'
    },
    {
        value: 2,
        text: 'Somewhat true'
    },
    {
        value: 3,
        text: 'Rather not true'
    },
    {
        value: 4,
        text: 'Not applicable at all'
    },
    {
        value: 5,
        text: 'No answer'
    },
    ],
    rows: [{
        value: '1',
        text: 'Sport does more harm than benefits'
    },
    {
        value: '2',
        text: 'Sport is unnecessary'
    },
    {
        value: '3',
        text: 'I can not do sport, due to health or physical reasons'
    },
    {
        value: '4',
        text: 'I do not have the opportunity to do so, there is none or too little offers'
    },
    {
        value: '5',
        text: "I don't like the talk of Sport and fitness"
    },
    {
        value: '6',
        text: 'I can not motivate myself'
    },
    {
        value: '7',
        text: 'I do not have time for this  '
    },
    {
        value: '8',
        text: "I don't have anybody to workout or do sport with"
    },
    {
        value: '9',
        text: 'I can not afford it'
    },
    {
        value: '10',
        text: 'I feel uncomfortable when others watch me'
    },
    {
        value: '11',
        text: 'I am not fit enough and that frustrates me '
    },
    {
        value: '12',
        text: 'I have bad experience'
    },

    ]

}

const q16: Questions = {
    type: 'matrix',
    name: 'q16',
    title: 'Here you will find again some statements, please indicate in each case, if you want to give them very much agree, rather agree, rather disagree or disagree at all.',
    columns: [{
        value: 1,
        text: 'Strongly agree'
    },
    {
        value: 2,
        text: 'Agree'
    },
    {
        value: 3,
        text: 'Disagree'
    },
    {
        value: 4,
        text: 'Strongly disagree'
    },
    ],
    rows: [{
        value: '1',
        text: 'Movement must first and foremost be fun'
    },
    {
        value: '2',
        text: 'Non-sporty people are bullied more often'
    },
    {
        value: '3',
        text: 'A daily gym or exercise lesson at school is important'
    },
    {
        value: '4',
        text: 'Offers for trend sports are hard to find.'
    },
    {
        value: '5',
        text: "Opening hours are too short at most sports facilities."
    },
    {
        value: '6',
        text: 'Sport is primarily about performance and competition'
    },
    {
        value: '7',
        text: 'Sport is taken far too seriously in our society'
    },
    {
        value: '8',
        text: "Exercise is first and foremost for health"
    },
    {
        value: '9',
        text: 'Exercise helps me to a get a more beautiful body'
    },
    ]
}

const q17: Questions = {
    type: 'matrix',
    name: 'q17',
    title: 'Below are a few measures to motivate young people to be more active. Please indicate whether you believe that these young people can be motivated to take more exercise:',
    columns: [{
        value: 1,
        text: 'Strongly agree'
    },
    {
        value: 2,
        text: 'Agree'
    },
    {
        value: 3,
        text: 'Disagree'
    },
    {
        value: 4,
        text: 'Strongly disagree'
    },
    ],
    rows: [{
        value: '1',
        text: 'More physical activity in school/at work'
    },
    {
        value: '2',
        text: 'TV commercials with short fitness exercises'
    },
    {
        value: '3',
        text: 'Fitness stations in public areas'
    },
    {
        value: '4',
        text: 'More sports activities in clubs'
    },

    ]
}

const q18: Questions = {
    type: 'radiogroup',
    name: 'q18',
    title: 'When you think of your circle of friends now, what would you say? Do most people in your circle of friends wear their outfits when they exercise...',
    choices: ['Highly relevant',
        'Rather important',
        'Rather not important',
        'Not relevant']
}

const q19: Questions = {
    type: 'radiogroup',
    name: 'q19',
    title: 'Another question: How do you feel with your looks...',
    choices: ['Very happy',
        'Rather content',
        'Rather dissatisfied',
        'Very unhappy']
}

const q20: Questions = {
    type: 'text',
    name: 'q20',
    title: 'What state do you live in?'
}
const q21: Questions = {
    type: 'text',
    name: 'q21',
    title: 'What is your highest completed education?'
}
const q22: Questions = {
    type: 'text',
    name: 'q22',
    title: 'And you are in which line of work…'
}
const q23: Questions = {
    type: 'text',
    name: 'q23',
    title: 'Are you..'
}
const q24: Questions = {
    type: 'text',
    name: 'q24',
    title: 'Do you have children of your own?'
}

const q25: Questions = {
    type: 'radiogroup',
    name: 'q25',
    title: 'You live in..',
    choices: ["At your parents' house",
        'In a separate apartment/house',
        'In a flat share']
}

const q26: Questions = {
    type: 'radiogroup',
    name: 'q26',
    title: 'How big is about the place where you live?',
    choices: ["Up to 5,000 inhabitants",
        'Up to 50,000 inhabitants',
        'Over 50.000 inhabitants']
}


const json: Json = {
    completeText: 'Complete Survey',
    questions: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26
    ],
    mode: "edit"
}
const SurveyQuestions = () => {
    const history = useHistory()
    return (
        <Survey.Survey json={json} onComplete={() => history.push('/Dashboard')} />
    )
}
export default SurveyQuestions 