function isPrime(number) {
    if(number <= 1) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if(number % i == 0) {
            return false
        }        
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(9))