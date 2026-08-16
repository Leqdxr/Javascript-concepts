// There are various ways to declare objects, in this file we will be dealing with object literals only
// Object literals - {key:value} - const myObj = {key: "value"};
// Object.create(proto) - This creates an object with given object as its prototype
// new Object() - const myObj = new Object();

// Object Literal
const userInformation = {
    name: "Aagaman",
    email: "aagaman@something.com",
    age: 20,
    favouriteCharacters: ["Luffy", "Bocchi"],
    isLoggedIn: true
} // This is how you define an object using object literal

// They are stored in key:value pairs and there are multiple ways to access them as well

console.log(userInformation.email); // The dot notation, it is useful when key is a valid identifier
console.log(userInformation["email"]); // The square/bracket notation, it is useful when the key is not a valid identifier
// They give the same output, they will return the value that is associated with "email" key.

const myObj = {
    "user location": "kathmandu",
    email: "someting@someone.com",
    isGoated: true
}

// The only way to access "user location" key is by using square/bracket notations
console.log(myObj["user location"]);

// Let's say there is a case where you have to define a symbol, and use it as a key in an object

const someSymbol = Symbol("key1"); // The "key1" is a description added for human readability during debugging

const symbolDemo = {
    name: "Leqdxr",
    password: "password123",
    [someSymbol]: "mykey123"
    // Without the brackets, javascript would treat it as a literal key name, as if we typed "someSymbol" within quotes
    // Meaning the Symbol variable that we declared above is untouched
    // If we use brackets, javascript will now evaluate it as an expression and use the variable we defined above.
    // So this is how Symbol is used in an object 
}

console.log(symbolDemo[someSymbol]);
console.log(symbolDemo); // This will print the symbol key value pair part as "Symbol(key1): 'mykey123'"
// Without bracket notation, we would get plain someSymbol: 'mykey123' leaving the variable we declared above unused

// We can also modify the values in our objects like this:
userInformation.email = "aagaman@newemail.com"; // This will override the existing email
console.log(userInformation.email);
userInformation["age"] = 90; // We can also do it like this
console.log(userInformation.age);

// If we do not want anyone to modify our values in an object (as in to lock the object) we can use Object.freeze()

Object.freeze(userInformation); // This can not be modified now
// If we try to change its email again
userInformation.email = "trying@newemail.com";
console.log(userInformation.email); // This will still be aagaman@newemail.com (since it was frozen)

// We can also add a function to an object. Let's say I want to add a function that console logs "Hello World" in myObj object

myObj.greeting = function() {
    console.log("Hello World");
}

myObj.greeting(); // Hello World
console.log(myObj.greeting());
// This will give us Hello World and undefined in a new line
// This is because our function did not have a return statement, so using console.log will give us undefined at the end

// We can also make a function and use it to reference something in an object, for example

// If we do not use () to call the function
console.log(myObj.greeting);
// Function(anonymous), it does not execute the function but returns function reference

myObj.mail = function() {
    console.log(`Hello, the email is ${this.email}`);    
} // "this" refers to the current object, which is myObj, and it's asking to display the value of "email" key in "myObj" object

myObj.mail();