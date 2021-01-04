
export default (): Array<Function> => {
    const key = 'HEROKU_SURVEY'
    const value = 'VISITED'

    const storeUserVisit = () => {
        localStorage.setItem(key, value)
    }

    const hasUserVisited = () => {
        if (localStorage.getItem(key) === value) {
            return true
        }

        return false
    }

    return [storeUserVisit, hasUserVisited]
}