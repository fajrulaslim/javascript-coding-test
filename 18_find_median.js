function findMedian(arr) {
    arr.sort((a, b) => a - b)
    const mid = Math.floor(arr.length / 2)
    if(arr.length % 2 == 0) {
        return (arr[mid - 1] + arr[mid]) / 2
    } else {
        return arr[mid]
    }
}

console.log(findMedian([1, 2, 3, 4, 5]))
console.log(findMedian([1, 2, 3, 4, 5, 6]))