
import { config } from '../config'


const getSurveyMode = async () => {
    const response = await fetch(`/mode`, {
        mode: 'no-cors',
    })
    const data = await response.json()
    const mode = await data.body
    return data
}
export default getSurveyMode
