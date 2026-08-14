/*
Array is an object that is used to store collection of data in a single variable. We can store data of different
data types in an array.

Arrays are resizeable so you can add or remove elements from an array and it will adjust it's length automatically
*/

// Ways to declare an array

const myArray = ["Apple", "Banana", "Soda"];
const anotherArray = new Array("Apple","Banana","Soda");
const mixedArray = [1,2,3,true,false,"Aagaman","Someone"];
const numberArray = [1,2,3,4,5];

console.log(myArray);
console.log(typeof myArray); // object
console.log(anotherArray);
console.log(typeof anotherArray); // object
console.log(mixedArray);
console.log(typeof mixedArray); // object

// If we want to access a specific element in an array, we can use indexing

console.log(myArray[2]); // Indexing starts from 0, so we get Soda as our output

// Array methods

myArray.push("Watermelon"); // push method adds an element at the end of an array
console.log(myArray); // [ 'Apple', 'Banana', 'Soda', 'Watermelon' ] (Watermelon got added at the end)

myArray.pop(); // This takes no arguments, this method removes element from the end of an array
console.log(myArray); // [ 'Apple', 'Banana', 'Soda' ] (Watermelon is removed since it was the last element)

myArray.unshift("Cake");
/*
This is used to add element at the start of an array. However, this method can be unoptimized
because we need to shift the entire array to add an element to the start. This can add heavy loads on a computer
*/
console.log(myArray); // [ 'Cake', 'Apple', 'Banana', 'Soda' ]

myArray.shift(); // This will remove element from the start of an array
console.log(myArray); // [ 'Apple', 'Banana', 'Soda' ] (Cake is removed since it was at the start)


console.log(myArray.includes("Apple")); // Used to check if an element is included in an array or not. This returns true
// Obtained output is a boolean. It is case sensitive so if you pass in "apple" with small "a" instead of "Apple" it will return false

console.log(myArray.includes("apple")); // false

console.log(myArray.indexOf("Apple")); // Returns index of the specified element. If the element is not found, it returns -1

const newString = myArray.join(); // This will return a new string, that is concatenation of all the elements in an array separated by comma
console.log(newString); // Apple,Bannana,Soda

// We can pass in arguments as well
const hyphen = myArray.join("-"); // This will replace comma by hyphen
console.log(hyphen); // Apple-Banana-Soda


console.log(myArray); // Original array is NOT modified


// Slice and Splice

// Let's first add some elements in the array as we only have 3 right now

myArray.push("Wine","Chocolate","Vanilla");

console.log("A ", myArray); // This is to print the current state of the array
// A  [ 'Apple', 'Banana', 'Soda', 'Wine', 'Chocolate', 'Vanilla' ]
console.log(myArray.slice(1,3)); // This will return elements of index 1 to 3 where 3 is exclusive
// [ 'Banana', 'Soda' ]
console.log("B ",myArray); // B  [ 'Apple', 'Banana', 'Soda', 'Wine', 'Chocolate', 'Vanilla' ]
// The original array is NOT modified by slice method

console.log(myArray.splice(1,3)); // This will start at index 1 and remove 3 elements, so indices 1 2 and 3 are removed
// [ 'Banana', 'Soda', 'Wine' ]
console.log("C ",myArray); // The original array itself gets modified and 3 elements from index 1 are removed from it

// Slice is for selecting/copying elements from a specified range without changing the original 
// Splice is for removing elements from a specified range modifying the original array itself

// Splice can also replace an element in an array with something else.

myArray.splice(1,0,"Mango"); // 1 is the start index, 0 is the delete count (How many elements to remove) "Mango" is the item to insert at that position
console.log(myArray); // [ 'Apple', 'Mango', 'Chocolate', 'Vanilla' ]

myArray.splice(0,1,"Orange"); // 0 is the start index, 1 is the delete count (How many elements to remove) so it will remove element at 0 and replace that with "Orange"
console.log(myArray);
// [ 'Orange', 'Mango', 'Chocolate', 'Vanilla' ]