const studyOne = require('../studyOne.json')
const studyTwo = require('../studyTwo.json')
const xlsx = require('json-as-xlsx')

const content = studyTwo.values
  .map((participant) => participant[2])
  .filter((participant) => participant.q1 || participant.q2)

const createColumn = (input) => {
  const columns = []
  const [participant] = input
  Object.keys(participant.q1).forEach((key) => {
    columns.push({
      label: `${key}`,
      value: (row) => row.q1[key] || '4',
    })
  })

  Object.keys(participant.q2).forEach((key) => {
    columns.push({
      label: `${key}`,
      value: (row) => row.q2[key] || '4',
    })
  })

  return columns
}

const columns = createColumn(content)

const settings = {
  sheetName: 'PreSurvey', // The name of the sheet
  fileName: 'ThesisData', // The name of the spreadsheet
  extraLength: 3, // A bigger number means that columns should be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

const download = true // If true will download the xlsx file, otherwise will return a buffer

xlsx(columns, content, settings, download)
