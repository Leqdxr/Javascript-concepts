// Write a program to check if the number is a palindrome

const myString = "Racecar"
let reversedString = ""
for(let i = myString.length-1; i>=0 ; i--) {
    reversedString = reversedString + myString[i]
}
if (reversedString.toLowerCase()==myString.toLowerCase()) { // .toLowerCase because Racecar would be reversed to racecaR, which would not be equal.
    // so this converts all to lowercase
    console.log(`${myString} is a palindrome`);
}
else {
    console.log(`The reversed string is ${reversedString} but it is not a palindrome.`);
}