const studyOne = require('../studyOne.json')
const studyTwo = require('../studyTwo.json')
const xlsx = require('json-as-xlsx')

const content = studyTwo.values.map((participant) => participant[3])

const questionKeysWithQ = [
  'q1',
  'q2',
  'q3',
  'q4',
  'q6',
  'q7',
  'q8',
  'q9',
  'q10',
  'q11',
  'q13',
  'q14',
  'q18',
  'q19',
  'q20',
  'q21',
  'q22',
  'q23',
  'q24',
  'q25',
  'q26',
  'q27',
  'q28',
  'q29',
  'q30',
]

const questionsForColumns = {
  q1: 'Somewhat healthy',
  q2: 'Rather sporty',
  q3: 'Rather lonely and likes to be alone',
  q4: 'Yes',
  q5: {
    'I am active in my spare time, but mostly spontaneously and without a fixed training goal.':
      '1',
    'In my spare time I do sports specifically to train.': '2',
    'I am active in one or more sports clubs.': '2',
    'I am physically active within the scope of school, my training or my job.':
      '1',
  },
  q6: 'Several times a week',
  q7: 'Rather too little',
  q8: ['At home', 'In fitness centers'],
  q9: 'I prefer to be active with other people',
  q10: 'Football, Home training',
  q11: 'Improve skills and strengthen body frame',
  q12: {
    'It gives me a chance to think.': '4',
    'My friends push me to.': '2',
    'I like doing things with other people.': '4',
    'It is a good way for me to relax.': '5',
    'I like to measure myself with others.': '5',
    'It is healthy for me.': '5',
    'I want to be physically attractive.': '5',
    'I can gain strength for everyday life.': '5',
    'I have time for myself.': '5',
    'It is fun.': '5',
    'I get to know my limits.': '5',
    'My parents push me to.': '1',
    'I can show what I can do.': '5',
    'It helps me relax and relieve stress.': '5',
  },
  q13: 'Physically less active than you',
  q14: 'Physically less active than you',
  q15: {
    'Sports does more harm than good.': '1',
    'Sports is unnecessary.': '1',
    'I cannot do sport, due to health or physical reasons.': '1',
    'I do not have the opportunity to do so, there are none or too little offers.':
      '4',
    'I do not like the talk of sports and fitness.': '4',
    'I cannot motivate myself.': '4',
    'I do not have time for sports.': '4',
    'I do not have anybody to workout or do sport with.': '4',
    'I cannot afford it.': '3',
    'I feel uncomfortable when others watch me.': '3',
    'I am not fit enough and this then frustrates me.': '4',
    'I had bad experience.': '4',
  },
  q16: {
    'Exercise must first and foremost be fun.': '4',
    'Non-sporty people are bullied more often.': '3',
    'A daily gym or exercise lesson at school is important.': '4',
    'Offers for trending sports are hard to find.': '3',
    'Opening hours are too short at most sports facilities.': '4',
    'Sport is primarily about performance and competition.': '2',
    'Sport is taken far too seriously in our society.': '2',
    'Exercise is first and foremost for health.': '4',
    'Exercise helps me to get a more beautiful body.': '3',
  },
  q17: {
    'More offers for exercise in school/at work.': '3',
    'TV commercials with short fitness exercises.': '3',
    'Fitness stations in public areas.': '3',
    'More sports activities in clubs.': '4',
  },
  q18: 'Rather important',
  q19: 'Somewhat happy',
  q20: 'Germany',
  q21: 'Bachelor’s degree',
  q22: 'University student',
  q23: 'Single',
  q24: 'No',
  q25: 'in a shared apartment',
  q26: 'over 50,000 inhabitants',
  q27: '18 - 24',
  q28: 'Male',
  q29: 'Yes',
  q30: 'Yes',
}

const deepKeys = ['q5', 'q12', 'q15', 'q16', 'q17']
const createColumn = (questions) => {
  const columns = []
  Object.keys(questions).forEach((key) => {
    if (deepKeys.includes(key)) {
      Object.keys(questions[key]).forEach((innerKey) => {
        columns.push({
          label: `${innerKey}`,
          value: (row) => {
            if (row && row[key] && row[key][innerKey]) {
              return row[key][innerKey]
            }
            return ''
          },
        })
      })
    }

    columns.push({
      label: `${key}`,
      value: (row) => row[key] || '',
    })
  })

  return columns
}

const columns = createColumn(questionsForColumns)

const settings = {
  sheetName: 'MainSurvey', // The name of the sheet
  fileName: 'ThesisData', // The name of the spreadsheet
  extraLength: 3, // A bigger number means that columns should be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

const download = true // If true will download the xlsx file, otherwise will return a buffer

xlsx(columns, content, settings, download)
