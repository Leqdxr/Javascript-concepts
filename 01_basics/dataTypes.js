// "use strict"; // This will treat the javascript code as the newer version.

/* 
alert(3+3); // This would usually give us a popup on our browser with the output "6"
But since we are using NodeJs, it will cause errors. So the line is commented out.
*/

let userAge = 20.302; // Number
let userName = "Aagaman"; // String

// We can check the type by using the "typeof" operator

console.log(typeof userAge); // This will print number
console.log(typeof userName); // This will print string

/*
Number data type in javascript can represent integers upto 2^53 -1 and can also represent floating point numbers
For numbers larger than 2^53 -1 we use "BigInt"
*/

let isGoated = true; // Boolean, which is used to represent true or false values
console.log(isGoated); // true

// There is also a standalone value called "null"

let temperature = null;
console.log(temperature); // null
console.log(typeof temperature); // It will return "object", even though null is a primitive data type.

// There is also undefined type and symbol type. Symbol is mostly used for uniqueness

/*
So, 7 data types were discussed.
Number
String
Boolean
null
Symbol
undefined
BigInt

All of them are primitive data types. "null" is a primitive data type as well even though typeof null may return "Object"
*/