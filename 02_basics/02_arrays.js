const tvShows = ["Arcane", "Dark", "Narcos"];
const movies = ["Interstellar", "Drive", "LaLaLand"];

// If we decide to push the movies array onto tvShows

// tvShows.push(movies);
// console.log(tvShows); // [ 'Arcane', 'Dark', 'Narcos', [ 'Interstellar', 'Drive', 'LaLaLand' ] ]
// // push() adds the movies array itself as a single element at the end of tvShows
// // That array as a whole is counted as one element, not merged in

// console.log(tvShows[3]); // This will give us the movies array that we pushed. It's counted as a single element
// console.log(tvShows[3][2]); // This will give us LaLaLand because its index is 2

// We can concat these arrays using a different approach to avoid this complication

const concatArrays = tvShows.concat(movies);
console.log(concatArrays); // [ 'Arcane', 'Dark', 'Narcos', 'Interstellar', 'Drive', 'LaLaLand' ]
// The original array is NOT modified when using concat()

console.log(typeof concatArrays); // object

/*
 There is another way to concat arrays as well, using the spread operator (...)
 concat() can also merge multiple arrays at once (tvShows.concat(movies, anotherArray)),
 so it's not really "less capable" spread but spread is just more flexible since you can mix individual
 values with arrays in one expression, e.g. [...tvShows, "Extra Show", ...movies]
 */

let combinedForm = [...tvShows, ...movies];
console.log(combinedForm);

// We can add other arrays too, mixed in wherever we want. This is what makes spread more flexible in practice

const anotherArray = ["Apple", "Banana", "Mushroom"];
combinedForm = [...tvShows, ...movies, ...anotherArray];
console.log(combinedForm); // All of them will be displayed as a combined array

// Let's say you have a complicated nested array

const someArray = [1, 2, 3, [2, 3, 4, [3, 2, 3], 2, 3], 2, 3, 3];
// But you want this as a single flat array. We can use flat()
console.log(someArray.flat(Infinity));
// We can pass a depth argument to flat(). Infinity flattens completely regardless of nesting depth.
// useful when you don't know how deeply nested the data is (e.g. from an API or user input)
// If you DO know the exact depth and want to avoid accidentally over-flattening structure
// specify it explicitly instead
// Output is [1, 2, 3, 2, 3, 4, 3, 2, 3, 2, 3, 2, 3, 3]


// There is a built in javascript object/constructor called Array

console.log(Array.isArray(tvShows));
console.log(Array.from("Aagaman")); // Creates an array from all elements in the string
console.log(Array.from({name: "Aagaman"})); // This will return []
// Array from only works on iterables like string, set, map, arrays etc
// It also works on array like objects (objects with length property) so for example:
console.log(Array.from({0: "aagaman", length: 1}));
// length: 1 tells Array.from() to make 1 element array, it also looks for property called 0 to fill the slot
// Since this has the property 0, we are able to make an array containing 1 element out of it

// Similarly if the code was like this
console.log(Array.from({1: "aagaman", length: 1}));
// We would get [undefined], as it only has to fill 1 slot. Length of 1 means only index 0 exists, not 1.
console.log(Array.from({1: "aagaman", length: 2}));
// Here, we would get [undefined, 'aagaman']. because it has to fill 2 slots. length of 2 means index 0 and 1 exists.
// Since we don't have 0 property, it will be left undefined, and "aagaman" will go to index 1.


const score1 = 200;
const score2 = 300;
const score3 = 400;
console.log(Array.of(score1,score2,score3)); // This will create an array using given arguments as elements
console.log(typeof Array.of(score1,score2,score3)); // object

console.log(Array(3)); // We would expect this given code to give us an array containing element "3" but it doesn't work like that
// We would get [ <3 empty items> ] as the output instead.
// We can use Array.of() in this case to get the expected result.

console.log(Array.of(3)); // Now we have an array containing an element "3".

// Array() behaves differently when you pass in one numeric argument, it will treat it as length. But when you pass in
// multiple arguments, it will treat it as elements.

// Array.of() always treats every argument as elements. So it is predictable and consistent.