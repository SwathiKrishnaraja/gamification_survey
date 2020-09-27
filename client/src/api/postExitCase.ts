
const postExitCase = async (data: { mode: string }) => {
    const response = await fetch('https://enigmatic-basin-07550.herokuapp.com/exit', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json()
}

export default postExitCase