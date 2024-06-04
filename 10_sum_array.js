function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

console.log(sumArray([]))
console.log(sumArray([1]))
console.log(sumArray([1, 2]))
console.log(sumArray([1, 2, 3]))
console.log(sumArray([1, 2, 3, 4]))