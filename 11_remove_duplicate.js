function removeDuplicate(arr) {
    return [...new Set(arr)]
}

console.log(removeDuplicate([1, 1, 2]))
console.log(removeDuplicate(["a", "b", "c", "b"]))