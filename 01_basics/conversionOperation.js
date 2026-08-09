let score = 100; // This is a number type
console.log(typeof(score)); // output: number

// If we want to convert it to a boolean data type, we would use the below code
let booleanScore = Boolean(score);
console.log(booleanScore); // true, any value other than 0 when converting from number = true. 1 => true, 0=>false
console.log(typeof(booleanScore)); // output: Boolean

// If we want to convert it to a string data type, we would use the following code
let stringScore = String(score); // Conversion to String
console.log(stringScore); // 100, but this has been converted to a String
console.log(typeof(stringScore)); // output: string

// Now let's convert a boolean into string and a number

let isGoated = true;
console.log(typeof(isGoated)); // output: Boolean
console.log(isGoated); // true

// Into number

let numberIsGoated = Number(isGoated); // This is how you convert something to Number type
console.log(numberIsGoated); // Output would be 1 because we have declared the value as "true". true => 1, false => 0
console.log(typeof(numberIsGoated)); // output: number

// Into String

let stringIsGoated = String(isGoated);
console.log(stringIsGoated); // Output would be "true" but this has already been converted to a string
console.log(typeof(stringIsGoated)); // output: string

// Let's convert a string into boolean and a number now

let someString = "";
// Let's convert this string which has nothing inside into a boolean
let booleanSomeString = Boolean(someString);
console.log(booleanSomeString); // Output would be false as the string has no content inside of it.
console.log(typeof(booleanSomeString)); // Output: boolean

/*
Important Note:
If the string wasn't empty, or if it even had a whitespace such as " ". Then the output would be true.
*/

// Let's convert this string into number now
let numberSomeString = Number(someString);
console.log(numberSomeString); // Output would be 0 as it has no content inside of it.
console.log(typeof(numberSomeString)); // output: number

/*
Here is the important part from code above,
if the string had content inside of it, that wasn't a numeric value for example "123abc" or simply "abciwa"
Then the output would be NaN. but it would still be converted into a number, and the typeof() would return number as well.

If it had an actual numeric value such as 123 or 12.03 then it would be converted into a number without any issue

If we were converting undefined type into a number, then it would be the same case, we would get "NaN" but it would be converted into a number 
*/
