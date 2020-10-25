
import { config } from '../config'


const getSurveyMode = async () => {
    const response = await fetch(`${config.HOST}mode`, {
        mode: 'no-cors',
    })
    const data = await response.json()
    const mode = await data.body
    await console.log(data)
    return data
}
export default getSurveyMode
