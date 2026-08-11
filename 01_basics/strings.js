const userName = "Leqdxr";
const userAge = 20;

// Leqdxr is 20 years old, we can display this using something called "String interpolation"

console.log(`${userName} is ${userAge} years old`); // This is called string interpolation
/* 
we could've done this other way, for example console.log(userName + " is " + userAge + " years old")
but that is generally not recommended.
*/

const movieName = new String("Spiderman Brand New Day"); // This would create a string OBJECT, containing the given string.
console.log(movieName); // [String: 'Spiderman Brand New Day']
console.log(typeof movieName); // object

console.log(userName[0]); // This is how to access a character at an index 0 // Indexing starts from 0 not 1
console.log(movieName[0]);
console.log(movieName.__proto__); // This lets us access the string prototype. __proto__ can be useful for understanding/inspecting how javascript works behind the scenes
console.log(movieName.toUpperCase()); // This is a string method that allows us to convert a string to uppercase

console.log(movieName.length); // This lets us see how many characters are in a string including whitespaces.

console.log(movieName.charAt(2)); // Accesses the character at index 2

// What if we want to know the INDEX of a specific character instead? we can use indexOf()

console.log(movieName.indexOf("S")); // If no result is found, it will return -1, it is also case sensitive so capitalization matters
// This returns the first occurance of the character in the given string.

console.log(movieName.slice(0,4)); // Displays the string starting from index 0 to 4. If we run this we will get Spid. So where did the 4th index go? -> It gets excluded.
// Slice supports negative value too.
console.log(movieName.slice(-4)); // It basically starts at -4, and displays everything till the end. in this case " Day" including whitespace ofcourse

console.log(movieName.slice(0)); // If no end value is given, it displays all characters from 0 to end of the string

console.log(movieName.slice(-4,0)); // If the start value is greater than the end value (for example here), slice() returns an empty string

// There is a similar method to slice called substring

console.log(movieName.substring(0,4)); // Same output as slice above, however this does not support negative values
console.log(movieName.substring(-4)); // -4 gets treated as 0, so it displays all characters from 0 to the end of the string


// Sometimes, strings may contain unnecessary white spaces at the start or end of the string, to clean the string from those whitespaces we can use trim()
const newString = "           Aagaman Leqdxr          Is the name          ";
console.log(newString);
console.log(newString.trim()); // This will trim the whitespaces from start and the end, not from the middle and print the desired output
const trimmedString = newString.trim(); // We can assign it to a variable and check the last indexing to verify the white spaces from the end was actually removed.
console.log(trimmedString.at(-1)); // This prints "e" so we know our string has been trimmed
console.log(trimmedString); // Aagaman Leqdxr          Is the name (without the whitespaces at the start and end)

const anotherString = "Aagaman-Leqdxr-Name-Something";

// if we want to replace something with something else, we can use .replace() method
console.log(anotherString.replace("Aagaman","Luffy")); // This replaces Aagaman with Luffy, also case sensitive so capitalization matters
console.log(anotherString.replace("-"," ")); // replaces "-" with white spaces

console.log(anotherString.includes("-")); // This can be used to check if something is included in a string or not, the obtained result is a boolean value

console.log(anotherString.split("-")); // Splits the string where ever "-" is found and returns an array of seperated parts
console.log(anotherString.split("-","2")); // You can add a limit too, here it specifies how many elements are included in resulting array, here 2 elements are to be included

const storingAnotherString = anotherString.split("-","2");
console.log(storingAnotherString[1]); // Access element at index 1 of resulting array, output: Leqdxr