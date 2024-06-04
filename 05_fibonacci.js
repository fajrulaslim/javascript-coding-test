function fibonacci(number) {
    if(number <= 1) {
        return number
    }
    return (number - 1 ) + (number - 2)
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))