
const postExitCase = async () => {
    const response = await fetch('http://localhost:8080/exit', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json()
}

export default postExitCase