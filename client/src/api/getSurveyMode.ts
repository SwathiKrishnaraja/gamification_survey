
const getSurveyMode = async () => {
    const response = await fetch('http://localhost:8080/mode', {
        mode: 'no-cors',
    })
    const data = await response.json()
    const mode = await data.body
    await console.log(data)
    return data
}
export default getSurveyMode
