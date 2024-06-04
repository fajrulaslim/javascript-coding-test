function elementFrequency(arr) {
    const frequency = {}

    for(const element of arr) {
        if(frequency[element]) {
            frequency[element]++
        } else {
            frequency[element] = 1
        }
    }
    return frequency
}

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequencies = elementFrequency(numbers);
console.log(frequencies); 