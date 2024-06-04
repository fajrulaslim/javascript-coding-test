function removeElement(arr, element) {
    return arr.filter((a) => a !== element)
}

console.log(removeElement([1, 2, 3, 4, 5], 5))
