function is_anagram(str1, str2) {
    const sortedString1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('')
    const sortedString2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('')
    return sortedString1 == sortedString2
}

const string1 = "Fajrul"
const string2 = "Afjrgl"
const isAnagram = is_anagram(string1, string2)
console.log(isAnagram)