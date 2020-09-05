import {Mode} from '../reducer/entryPointReducer'

const postSurveyMode = async (data:Mode) => {
    const response = await fetch('http://localhost:8080/mode', {
        method: 'POST',
        cache: 'no-cache', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json() 
    }

export default postSurveyMode