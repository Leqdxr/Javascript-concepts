/*
 Data is categorized into two types based on how it is stored in the memory and how it is accessed.
 Primitive and Non primitive data types (or reference types)
 */

 /*
  Primitive - 7 types : String, Number, BigInt, Symbol, Boolean, Undefined, Null
  Primitive data types are the basic data types that can store single value. When these values are
  passed or assigned to another variable, then their value is COPIED.

  Example code below:
 */

  let x = 20;
  let y = x; // y copies the value of x, such that y = 20
  console.log(y); // 20
  console.log(x); // 20
  
  
  // Any changes we make to y, will not affect x since it has copied the value completely.

  y = 30;
  console.log(y); // 30
  console.log(x); // 20
  
  const stringVariable = "This is a string";
  const numberVariable = 20;
  const id = Symbol('100');
  const anotherId = Symbol('100');

  // Symbols => Uniqueness

  console.log(id===anotherId); // false, even though both are 100
  let undefinedVariable; // Or we could do undefinedVariable = undefined but that's not necessary in this case since its default value.
  const roomTemp = null;
  const isGoated = true;
  const bigIntExample = 90071992547409912n; // Example of bigint, (n at the end) rarely used
  
  
 /*
  Reference types : Array, Objects, Function
  Reference types or non primitive types are the data types that can hold more complex structures or collections of
  data. The variables will store reference to the object rather than the object itself.

  Example code:
 */

  let x1 = { name : "Peter Parker"}; // x1 stores reference to this object now
  console.log(x1); // { name: 'Peter Parker' }
  
  let x2 = x1; // x2 receieves copy of the reference, so now they are both referring to same object
  x2.name = {name : "Tony Stark"}; // the name property is replaced with new object
  console.log(x2); // { name: { name: 'Tony Stark' } }
  console.log(x1); // { name: { name: 'Tony Stark' } } // Since they were both referring to same object.
  
 // Javascript is a dynamically typed language.

const myArray = ["Miles morales", "Spider Gwen", "Spiderman Noir", "Peter Parker"]; // This is how you define an array

let myObj = {
    email: "spiderman@gmail.com",
    age: 17,
    id: 12,
}; // This is how you define an object

const myFunction = function() {
    console.log("This is a function");
    }; // This is one way to define a function

myFunction(); // This is how you call a function
console.log(myObj);
console.log(myArray);

console.log(typeof bigIntExample); // bigint
console.log(typeof stringVariable); // string
console.log(typeof numberVariable); // number
console.log(typeof isGoated); // boolean
console.log(typeof roomTemp); // object, even though null is a primitive data type
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof undefinedVariable); // undefined
console.log(typeof myArray); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function