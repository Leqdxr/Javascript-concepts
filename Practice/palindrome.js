// Write a program to check if the number is a palindrome

const myString = "A man a plan a canal Panama"
let reversedString = ""
for(let i = myString.length-1; i>=0 ; i--) {
    reversedString = reversedString + myString[i]
}
if (reversedString.replaceAll(" ", "").toLowerCase()==myString.replaceAll(" ","").toLowerCase()) { // .toLowerCase because Racecar would be reversed to racecaR, which would not be equal.
    // so this converts all to lowercase
    // replaceAll will replace all whitespaces with ""
    console.log(`${myString} is a palindrome`);
}
else {
    console.log(`The reversed string is ${reversedString} but it is not a palindrome.`);
}