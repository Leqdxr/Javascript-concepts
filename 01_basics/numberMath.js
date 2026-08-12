const score = 100; // The data type is automatically assigned as a number

// If we want to explicitly define something as a number data type, we can use the following code

const anotherScore = new Number(200); // This will be of the object type
console.log(typeof anotherScore); // Object

console.log(anotherScore); // [Number: 200]

// Number methods

console.log(score.toString().length);
// This will convert our number variable to a string type, we can also use string methods along with it. Output: 3

const storingToString = anotherScore.toString();
console.log(typeof storingToString); // String
console.log(storingToString); // 200
console.log(storingToString.length); // 3

const decimalValue = 200.95218498;
console.log(decimalValue.toFixed(2));
/*
This will return a string by formatting it to 2 decimal places. So output is 200.95
*/
console.log(typeof decimalValue.toFixed(2)); // String

console.log(decimalValue.toPrecision(3));
/* 
This method .toPrecision() allows us to format a number to specified number of significant digits
The obtained output is a string

The above code gives us "201" because 200.95218498 is rounded to 3 significant digits.
We keep 200, and since the next digit is 9, it rounds up to 201.

If we specify 4 significant digits, we get "201.0".
We keep 200.9, and since the next digit is 5, it rounds up to 201.0.

If we specify 5 significant digits, we get "200.95".
We keep 200.95, and since the next digit is 2, it does not round up.
*/


const money = 1000000;
console.log(money.toLocaleString()); // The obtained result is a string
// It formats a number according to local number formatting conventions. The default is english locale.
// Output: 1,000,000. Though we can specify locale in the parenthesis