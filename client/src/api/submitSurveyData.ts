import { SurveyQuestionsType, OpenQuestions } from '../types/types'
import { config } from '../config'

type DataType = {
  survey_mode: string,
  result: Array<SurveyQuestionsType>,
  char_count: Array<OpenQuestions>,
  average_time: number,
  time_taken: number,
  badges?: number,
  points?: number,
  leaderboard_position?: number,
  narratives_unlocked?: number
}

const submitSurveyData = async (data: DataType) => {
  const response = await fetch(`${config.HOST}submit`, {
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