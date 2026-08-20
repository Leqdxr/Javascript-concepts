// IIFE stands for immediately invoked function expressions

// If we want to immediately execute a function after it is declared, we can use IIFE
// Not only that, but we can also face problems due to global scope pollution, so to remove the global scope pollution we can use IIFE
// It solves that problem by wrapping your code in a function that is NOT accessible outside. And it is executed immediately as well
// We can think of it as ()() within first parenthesis we write function definition, and 2nd parenthesis will call the function and execute it immediately

// Example

(function connectMessage() {
    console.log("Database Connected Successfully");
}) ();
// We declared a function, and immediately executed it like this

//We can use this for arrow function as well

(() => {
    console.log("Database connection complete")
}) ();

// Note: If there is a statement before an IIFE that doesn't end with a semi colon, we must include one.
// Or else javascript may interpret it as a function call and throw us a type error.


// We can also pass in values

((name)=> {
    console.log(`Welcome to the app, ${name}`);
}) ("Aagaman");