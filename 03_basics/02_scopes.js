// We can declare variables using 3 ways: let, const and var
// However, usuage of var is not common these days due to problems related to block scope and functional scope.

// "Scope" basically means where a variable can be accessed within your code
// Global scope = A variable that is declared outside all functions and blocks (blocks are pieces of code written within {})
// Block scope = A variable is declared inside a block using let and const are block scoped and may only exist within that specific block {}
// Function scope = A variable is declared inside a function with var are function scoped and exists anywhere inside that function, including blocks nested in it


/*
let and const are called block scoped because when a variable is defined within a block (for example if statements)
It cannot exist outside of that specific block
When we declare a variable using let or const inside of a function and outside of 
Any nested blocks it may contain then it can exist anywhere within that function.
However, if it is declared inside a nested block in that function, it may only exist in that specific block itself.
When we go out of the function, we stop being able to access variables defined by let or const.

Also, let's say you declare a constant globally, if you try to reassign its value in a block it will throw an error as usual
But, if you try to define it again inside that block, lets say

const a = 10;
if (true) {
    const a = 20;
}

Then this would be allowed, as it would be like declaring a new variable that is treated as block scoped.
let and const does NOT allow redeclaration in the same scope, whereas var allows redeclaration within the same scope.
let and var variables can be reassigned while const variable can't be reassigned

var is called function scoped. If we declare it inside a block then unlike let and const, var can be accessed anywhere
Outside of the block. However, when we define a function. It can exist ANYWHERE within that function.
Even in the blocks nested within functions.
But as soon as we escape the function, we stop accessing the variable defined by var
*/

var c = 300;

if(true) { 
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a); // variable "a" can be accessed within this block
    console.log(b); // variable "b" can be accessed within this block
    console.log(c);
}

// console.log(a); // This would throw an error because a is block scoped and doesn't exist globally
// console.log(b); // This would also throw an error due to same reasons as line 15
console.log(c); // output: 30, This is because var is function scoped, not block scoped.
// Since var is NOT block scoped, a variable declared inside a block using var can be accessed anywhere
// The reason why we get 30 instead of 300 is because the variable was redeclared inside if statement.

let num1 = 20;
const num2 = 30;
if (true) {
    let num1 = 1;
    const num2 = 3;
    console.log("Inner", num1); // Inner 1
    console.log("Inner", num2); // Inner 3
    
}

console.log("Outer",num1); // Outer 20
console.log("Outer", num2); // Outer 30
// This is because the variables defined within the if block can't be accessed outside. So globally defined variable will be printed


// Case where it involves a function

function letConst() {
    let a = 10;
    if (true) {
        let a = 20;
        const b = 30;
        console.log("Inner", a); // Inner 20
        console.log(b);
     }
    console.log("Outer", a); // Outer 10 because that was the value defined outside the if block
    // console.log(b); // b is not defined error because it exists within the above if statement only
}

letConst();
// console.log(a); // "a" is not defined error
// console.log(b); // "b" is not defined error

function varTalk() {
    var num3 = 100;
    if (true) {
        console.log(num3); // 100
        var num3 = 200;
        console.log(num3); // 200
    }
    console.log(num3); // 200 (not affected by the block)
}

varTalk();
// console.log(num3); // num3 is not defined error since it can only exists in a function


// Let's say we have a nested function, let's analyse how scope works on that function

function one() {
    const name = "aagaman";
    function two() {
        console.log(name); // It can access the name variable defined in outer function
        const age = 20;
        console.log(`${name} is ${age} years old`);
    }
    two();
    console.log("Outer", name);
    // console.log(age); // This would throw an error because we can't access the age variable as it was defined in a nested function two()
}

one();

// Let's say we have a nested if statements, let's analyse how scope works on those if blocks

if (true) {
    const name = "aagaman";
    if(name==="aagaman") {
        console.log(name); // The nested if can access name variable defined in outer if statement
        const age = 20;
        console.log(`${name} is ${age} years old`);
    }
    console.log(name);
    // console.log(age); // This would throw an error as it can't access the age variable defined in inner if statement
}

// console.log(name); // This would throw an error because it is not a global variable
// console.log(age); // This would throw an error because it is not a global variable


// ================================= Interesting Scenario =========================

console.log(multiplyTwo(2));
// This would output 4, because the function declaration is hoisted.
// Hoisting is a behaviour in javascript where declarations are processed before executing the code in that scope
// So, function declarations can be called before their declaration because function declaration is hoisted
function multiplyTwo(num) {
    return num*2;
}

console.log(divideTwo(2));
// Although divideTwo is hoisted as well, we have declared it using const keyword assigning it as function expression
// When it comes to let and const, variables cannot be accessed before initialization
// The declaration IS processed during hoisting, but the function is not assigned to divideTwo until the below line is reached during normal execution
const divideTwo = function(num) {
    return num/2;
}
