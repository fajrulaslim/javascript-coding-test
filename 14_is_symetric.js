function isSymetric(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        if(arr[i] !== arr[arr.length - 1 - i]) {
            return false
        }   
    }
    return true
}

console.log(isSymetric([1, 2, 3, 4, 3, 2, 1]))
console.log(isSymetric([1, 2, 3, 2, 4]))