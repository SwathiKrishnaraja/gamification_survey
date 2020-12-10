const shuffle = (inputNumber: number): Array<Number> => {
    const shuffleArray = []
    for (let i = 1; i <= inputNumber; i += 1) {
        shuffleArray.push(i)
    }

    for (let i = shuffleArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray

}

export default shuffle