function isEven(number) {
    return number % 2 == 0
}

function arrFilterEvent(arr) {
    return arr.filter(isEven)
}

console.log(arrFilterEvent([1, 2, 3, 4, 5, 6]))