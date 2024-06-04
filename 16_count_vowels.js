function countVowels(string) {
    const vowel = "auieoAIUEO"
    let count = 0
    for(const char of string) {
        if(vowel.includes(char)) {
            count++;
        }
    }
    return count
}

console.log(countVowels("Fajrul"))
