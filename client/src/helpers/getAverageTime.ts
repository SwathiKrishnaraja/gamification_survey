/**
 * 
 * @param timeSpent overall time spent on the survey
 * @returns avergae time
 */

const numberOfSurveyPages = 9
const getAverageTime = (timeSpent: number) => timeSpent / numberOfSurveyPages

export default getAverageTime