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


// --------------------- Operation -------------------------

let number1 = 5;
let number2 = 4;
console.log(number1+number2); // This is used for addition, output: 9
console.log(number1-number2); // This is used for subtraction, output: 1
console.log(number1/number2); // This is used for division, output: 1.25
console.log(number1*number2); // This is used for multiplication, output: 20
console.log(number1%number2); // This is used for remainder, output: 1
console.log(number1**number2); // This is for exponentiation, It basically adds something to power of something. output: 625
// For example, 2**2 would be 4 because its 2^2 = 4. Likewise, 2**3 would be 8 because its just 2^3.

// We can also add two strings together

let string1 = "Aagaman";
let string2 = "Leqdxr";
console.log(string1+ " " +string2); // " " is for adding a whitespace between them, without it we would get AagamanLeqdxr
// Output: Aagaman Leqdxr

console.log("1" + 2);
console.log(1 + "2");

/*
Both of the code above would return "12". Because, if there is a case where either of the operands is a string
then, javascript converts the other value into a string and performs string concatenation. This is when we are dealing with
two operands.
*/

// Let's look a different case now.
console.log("1" + 2 + 2); // Output: 122
console.log(1 + 2 + "2"); // Output: 32
console.log(1+"2"+2); // Output: 122
/*
Javascript evaluates the code from left to right, here we are trying to perform operation on 3 operands. 1 is a string
and 2 are numbers.

In line number 90, we can see we first used a string. So javascript converts the other values into a string and concatenates them
However, in line 91, we are getting 32 because we used 2 numbers at first. So those are added. Then we would have 3 + "2"
So, in this case 3 is converted to a string and string concatenation is performed giving us "32"

Similar logic applies to line 92 giving us 122 as well.

If we check their type using typeof(), we would get string.
*/

console.log(+true); // Output: 1
console.log(+"helloooo"); // Output: NaN
console.log(+""); // Output: 0

// + in this case is a unary operator, it converts something into a number.


let x = 2;
let y = x++;
console.log(x,y);
/* 
This would return 3 2.
Here, on line 114 we used post-increment operator.
Basically, Post-increment = use first, increment later
           Pre-increment = increment first, use later

Since we used postfix, the value of x (which is 2) was stored in y variable, then finally the value of x was increased
so by the time we console log, the value of x would be 3 and value of y would be 2.

If we used pre-increment instead, such that let y = ++x, the value of x would be increased and stored in y. So y = 3.
Then the output would've been 3 3.
*/