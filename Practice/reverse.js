// Write a function reverseWords(sentence) that reverses the order of words in a sentence, but keeps each word spelled normally.
// "Hello World" becomes "World Hello".

const reverseWords = (sentence) => {
    let reversedSentence = []
    let arraySentence = sentence.split(" ")
    for(let i = arraySentence.length - 1 ; i >= 0; i--) {
        reversedSentence.push(arraySentence[i])
    }
    return reversedSentence.join(" ")
}

console.log(reverseWords("Aagaman Is The Goat"));