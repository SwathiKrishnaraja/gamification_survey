import { SurveyQuestionsType, OpenQuestions } from '../types/types'

type DataType = {
    survey_mode: string,
    result: Array<SurveyQuestionsType>,
    char_count: Array<OpenQuestions>,
    average_time: number,
    time_taken:number,
    badges?:number,
    points?:number,
    leaderboard_position?:number,
    narratives_unlocked?:number
}

const submitSurveyData = async (data: DataType) => {
    const response = await fetch('http://localhost:8080', {
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