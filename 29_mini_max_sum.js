function miniMaxSum(arr) {
    arr.sort((a, b) => a - b)
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const total = arr.reduce((a, b) => a + b, 0)
    
    const minSum = total - max
    const maxSum = total - min
    
    console.log(minSum, maxSum)
}

miniMaxSum([1, 2, 3, 4, 5])