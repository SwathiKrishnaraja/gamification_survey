import { SurveyQuestionsType, OpenQuestions, SurveyDataType } from '../types/types'
import { config } from '../config'


const submitSurveyData = async (data: SurveyDataType) => {
  const response = await fetch(`/submit`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json()
}

export default submitSurveyData