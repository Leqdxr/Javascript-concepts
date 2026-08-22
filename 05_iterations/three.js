// for of
// it loops over values in an array or iterables (like strings)


const myArray = [1,2,3,4,5]
// if we want to loop over this array, we can do it using for of

for(const i of myArray) {
    console.log(i);
}
// This will print 1 to 5.
// So it basically loops over values in an iterable one at a time, in this case 1st iteran i = 1, 2nd i = 2 and so on


const myString = "Hello World"
// We can use continue to skip the whitespace from being printed if we like

for(const word of myString) {
    if(word==" ") {
        continue;
    }
    console.log(word);
} // This will loop over every element in the string one at a time and print them, except for whitespaces


// Map
// Map are javascript objects that can store key-value pairs
// The keys can be of any type unlike object where keys must be string or symbol (numbers get converted to string)
// Maps also have a fixed insertion order
// It is an iterable, however javascript object isn't

const map = new Map()
map.set("ID",2400000)
map.set("Phone", 9213824213)
map.set("Country","Nepal")
console.log(map); // Map(3) { 'ID' => 2400000, 'Phone' => 9213824213, 'Country' => 'Nepal' }
// maps can't have duplicate values, so if we try to insert country again
map.set("Country","Nepal")
console.log(map); // Map(3) { 'ID' => 2400000, 'Phone' => 9213824213, 'Country' => 'Nepal' } (same output as above)
// it will not be inserted

// We can loop through this using for of loop as well

for(const element of map) {
    console.log(element);
} // We get the output in form of [key, value]
// But we can use square brackets to obtain key and values separately

for(const [element, value] of map) {
    console.log(element);
    console.log(value);
}
/*
ID
2400000
Phone
9213824213
Country
Nepal
*/

// We can also do this

for(const [element, value] of map) {
    console.log(element + ":-" + value);
}
/*
ID:-2400000
Phone:-9213824213
Country:-Nepal
*/