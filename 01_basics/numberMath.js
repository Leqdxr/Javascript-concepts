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


//                                Math

// Notes about Math library in javascript

const mathNumber = 2;
console.log(Math.abs(-mathNumber)); // Converts the number an absolute value, negative sign gets converted into positive
// Output: 2

console.log(Math.pow(mathNumber,3)); // Raises power of a variable by specified number, in this case 3 (similar to ** operator in js)
// Output: 8

console.log(Math.round(40.56)); // Rounds the number
// Output: 41, if it was 40.4 instead it would be just 40

console.log(Math.ceil(40.2)); // Rounds the number to the next largest integer
// Output: 41

console.log(Math.floor(40.9)); // Rounds the number to the next smallest integer
// Output: 40

console.log(Math.min(4,2,3,5)); // Gives us smallest value from a set of numbers
// Output: 2

console.log(Math.max(4,2,3,5)); // Gives us largest value from a set of numbers
// Output: 5

// Random method

console.log(Math.random()); // This will give us a random number ranging from 0 to 1

console.log((Math.random()*10) + 1); // Generates a random number that is atleast 1. So, from 1 (inclusive) to 11 (exclusive)
// However, since it may contain unnecessary decimal points, we can use floor method with it

console.log(Math.floor(Math.random()*10) + 1); // Now, we get a value from 1 (inclusive) to 11 (exclusive) without having to worry about decimal points

// What if we wanted to specify a range instead? Let's say from 1 to 6, since that's the numbers on a dice

const min = 1;
const max = 6;

// Method to get a random number at a specified range

console.log(Math.floor(Math.random() * ( max - min + 1)) + min); // Output is a random number from 1-6

/*
Basically, what is happening in the code above is that, we specified a min value and max value
subtracting them will give us a range, we add 1 so that max value can also be included
Math.floor() will give us the result in whole number avoiding decimal places
Finally, we add min to shift the results so it starts from our specified value.

Now we get a random number from 1-6

This can be treated as a formula.

Math.random((max-min+1)) + min
*/