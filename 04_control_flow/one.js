// if statements
// >, <, ==, ===, >=, <=, !=, !==
// &&, ||
// && = all conditions must be true, || = atleast one condition must be true
// if, else if and else statements


const isLoggedIn = true
const isStudent = true
const username = "Leqdxr"

if(isLoggedIn && isStudent) { // Both conditions must be true for if block to be executed
    console.log(`Hello ${username}, you are eligible for students discount!`);
} // If the condition is true, execute the if block
else {
    console.log(`Hello ${username}, unfortunately you are NOT eligible for students discount`);
} // or else execute the else block

console.log("Thank you!"); // this will execute no matter what


if(true) console.log("Hello World"), console.log("Hi"); // Can be written like this as well (not widely used due to readability issues)

// Scope in if statements

const anotherName = "hello"
if (true) {
    const age = 20
    console.log(`Hello ${anotherName}, you are ${age} years old`);
}

// console.log(age); // ReferenceError due to block scoping

const usingChrome = false
const isVisiting = true

if(isVisiting || usingChrome) { // any 1 condition must be true for the statement above to be executed
    console.log("Executed");
}
else {
    console.log("Not executed");
}

// else if example

const balance = 1000
if(balance < 500) {
    console.log("Balance is less than 500");
}
else if(balance < 750) {
    console.log("Balance is less than 750");
}
else if(balance < 900) {
    console.log("Balance is less than 900");
}
else if(balance < 1200) {
    console.log("Balance is less than 1200");
}
else {
    console.log(`Your balance is ${balance}`);
}