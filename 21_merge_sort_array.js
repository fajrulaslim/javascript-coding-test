function mergeSortArray(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

const array1 = [1, 2, 3, 2, 6]
const array2 = [14, 10, 11, 12]
const result = mergeSortArray(array1, array2)
console.log(result)