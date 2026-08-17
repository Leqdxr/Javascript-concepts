// A function is a reuseable block of code in javascript
// Instead of writing the same line of code again and again, you can define a function and call it whenever needed

// A function that prints my name

function myName() {
    console.log("Aagaman");
}
// This is a basic way to define a function
myName(); // This is how you call a function, it will now print "Aagaman"
// If you don't include the parenthesis you would just be referencing the function and not actually executing it.
console.log(myName); // Function: myName

console.log(myName()); // This would return undefined
// This is because, our function above doesn't have any return statement.
// A function does not return anything by default unless we tell it to. console.log() does NOT equal returning a value

function addNumbers(number1,number2) { // number1 and number2 here are parameters
    return number1 + number2; // This is a return statement, now if we try using console.log(), it would return the result instead of showing undefined
}

console.log(addNumbers(20,30)); // output: 50, 20 = number1 and 30 = number2, they are called arguments. They are the values that we pass to a function
// This would give us 50, as we have a return statement. However, if we try calling it without console.log() it would give us nothing
// This is because we are not asking our function to print anything, we are just asking it to return sum of two numbers after computing it

// We can also store this in a variable now

let result = addNumbers(30,40);
console.log(result); // 70


// There is a rule in javascript that if we write any line of code after return statement, that line becomes unreachable

function exampleReturn() {
    return "Hello";
    console.log("Aagaman"); // This will be unreachable
}

exampleReturn(); // We do not get anything in return
console.log(exampleReturn()); // Hello

function greetUser(username) {
    if(!username) { // ! = NOT operator, if value is true, it makes it false and vice versa. This line of code is asking us to execute this block of code if username is empty              
        console.log("Your username can NOT be empty");
        return; // This is necessary, because if we do not keep return here, it will execute the below line of code greeting "undefined" as well.
        // so this return is used to stop the function
    }
    return `Hello ${username}, welcome to the app`;
}

console.log(greetUser("Aagaman")); // This will print Hello Aagaman, welcome to the app
console.log(greetUser()); // Return with no value becomes undefined, so we get "Your username can NOT be empty" "undefined"