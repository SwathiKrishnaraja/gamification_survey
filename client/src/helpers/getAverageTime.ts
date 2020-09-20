/**
 * 
 * @param timeSpent overall time spent on the survey
 * @returns avergae time
 */

const numberOfSurveyPages = 8
const getAverageTime = (timeSpent: number) => timeSpent / numberOfSurveyPages

export default getAverageTime