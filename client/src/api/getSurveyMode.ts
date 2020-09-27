const getSurveyMode = async () => {
    const surveyModeResponse = await fetch('http://localhost:8080/mode')
    const modes = await surveyModeResponse.json()
    return modes
}
export default getSurveyMode