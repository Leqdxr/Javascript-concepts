// To define a constant we will use the "const" keyword.
const userId = 101293;
// To declare variables we have 2 ways, "let" or "var"
let userEmail = "aagaman@gmail.com";
var userCountry = "Nepal";
/*
However, it is advised not to use "var" often because of issues with block scope and functional scope.
*/

console.log(userId); // This a way to print something in console.
console.table([userEmail,userCountry]); // This is a way to print multiple variables in a tabular form.

// You can not change the value of a constant. Example:
// userId = 1023;
// console.log(userId); // We will be hit with the "TypeError: Assignment to constant variable" error message.

// However, we CAN change the value for variables (defined by let/var)
userEmail = "somethingelse@gmail.com";
userCountry = "Germany";
console.table([userId,userEmail,userCountry]);

// The default value for variables is "undefined"
let letDefault;
var varDefault;
console.table([letDefault,varDefault]); // This will print undefined for both in a tabular form.

// Const however, doesn't have a default value. It must be initialized when declaring it.