// "this" keyword refers to the object a function is called on

const user = {
    username: "leqdxr",
    age: 20,
    
    welcomeMessage: function() {
        console.log(`Hello ${this.username} welcome to the app`);
        // we use "this" keyword here because without it, javascript will throw a reference error
        // this is because, using "username" alone would make javascript look for the variable in current scope, which is unavailable
        // "this" keyword in this context refers to whatever object the function was called on, in this case "user" object
        // so, "this" here is basically just a reference to user object, "this.username" in this context is similar to using "user.username" which would give same output
        console.log(this);
        /*
        This will print 
          {
            username: 'leqdxr',
            age: 20,
            welcomeMessage: [Function: welcomeMessage]
          }
        */
        return "Thank you";
    }
}

console.log(user.welcomeMessage());
console.log(this); // this would print {}
// this depends on environment, im on node so it prints {}
// if we were to execute this on a browser however, we would get window, which is the global object for browser engines

// On node environment
function aagaman() {
    console.log(this); // this will print node's global object, since aagaman() is called as plain function (process, buffer etc etc)
    console.log(this.username);
    // This will print undefined, because even though the global object exists, it has no "username" property
    // if we were to define a variable with const or let called "username", and try running this code again, we would still get undefined
    // this is because, const and let creates a variable accessible by name but doesn't attach themselves as property of global object
    // this case is true for "var" as well in a node environment
    // however, if in a browser or node repl, var will behave differently
    // it will attach "username" as global object property and we would get whatever value "username" variable holds
    // but right now since we are in node environment, we would get "undefined" through var as well.

    // the reason why it's different in node environment is because of node module wrapping.
}

aagaman();


// arrow function


const someFunction = function() {
    const username = "Aagaman";
    console.log(this.username); // undefined
    console.log(this); // this will return node's global objects as someFunction() is called as plain function call
}

someFunction();

const arrowFunction = () => {
    const username = "Aagaman";
    console.log(this); 
    // on node environment, it would print {}. This is because arrow functions borrow "this" from their enclosing scope
    // in this case, it is module.exports = {}
    // in CommonJs Node.js module top level "this" is module.exports which initially is {}
    console.log(this.username); // undefined
}

arrowFunction();

// console.log(((num1,num2) => {
//     return num1+num2;
// }) (2,3)); // output - 5

const addNumbers = (num1,num2) => {
    return num1+num2;
}

console.log(addNumbers(3,4)); // 7

// This is called explicit return, we are writing return explicitly.
// There is implicit return as well where we don't have to write "return" keyword when using arrow functions

const subNumbers = (num1,num2) => num1-num2;
console.log(subNumbers(5,3)); // 2

// We can wrap it around parenthesis as well
const subNumbers2 = (num1,num2) => (num1-num2);
console.log(subNumbers2(5,3));

// We can return an object as well

const forObject = () => {username: "Aagaman"};
console.log(forObject()); // This would give us undefined. Because without parenthesis javascript wont know if it is a object literal or start of function body block
// JS always assumes by default that it is a function body block
const forObject2 = () => ({username: "Aagaman"});
console.log(forObject2()); // { username: 'Aagaman' }

// IMPORTANT NOTE: If you write curly braces {} you must explicitly write return

const divideFunction = (num1,num2) => {
    num1/num2;
}

console.log(divideFunction(4,2)); // This will give undefined, because its not returning anything

const divideFunction2 = (num1,num2) => (
    num1/num2
);

console.log(divideFunction2(4,2)); // This wouldn't return undefined, this would give us 2.