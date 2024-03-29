
const postExitCase = async (data: { mode: string }) => {
    const response = await fetch(`/exit`, {
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