function palindrome(string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reverseString = cleanString.split('').reverse().join('')
    return cleanString == reverseString
}

console.log(palindrome("aba"))
console.log(palindrome("mawar"))