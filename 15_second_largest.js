function secondLargest(arr) {
    const max = Math.max(...arr)
    const filter = arr.filter((a) => a !== max)
    return Math.max(...filter)
}

console.log(secondLargest([1, 2, 3, 4, 5]))
console.log(secondLargest([1, 2, 3, 14, 5]))
console.log(secondLargest([1, 2, 13, 14, 5]))