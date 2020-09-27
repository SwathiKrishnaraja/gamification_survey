
const getSurveyMode = async () => {
    const response = await fetch('https://enigmatic-basin-07550.herokuapp.com/mode', {
        mode: 'no-cors',
    })
    const data = await response.json()
    const mode = await data.body
    await console.log(data)
    return data
}
export default getSurveyMode
