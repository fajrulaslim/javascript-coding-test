function findModus(arr) {
    const frequency = {}
    let maxFreq = 0
    let mode = []

    for(const element of arr) {
        if(frequency[element]) {
            frequency[element]++
        } else {
            frequency[element] = 1
        }
    }
    
    for(const key in frequency) {
        if(frequency[key] > maxFreq) {
            maxFreq = frequency[key]
            mode = [Number(key)]
        } else if(frequency[key] == maxFreq) {
            mode.push(Number(key))
        }
    }

    return mode
}

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequencies = findModus(numbers);
console.log(frequencies); 