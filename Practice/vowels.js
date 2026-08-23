// Write a function countVowels(str) that counts how many vowels are in a string (use a loop, not a fancy method).

const countVowels = (str) => {
    let vowels = ""
    let vowelList = ["a","e","i","o","u"]
    for(let i = 0; i < str.length; i++) {
        if(vowelList.includes(str[i].toLowerCase())) {
            vowels = vowels + str[i]
        }
    }
    return vowels.length
}

console.log(countVowels("aagaman")); // 4
console.log(countVowels("aeiou")); // 5