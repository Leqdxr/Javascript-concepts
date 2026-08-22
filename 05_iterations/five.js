// For each loop

// For each loop is used when you want to iterate over each elements in an array and perform a function on every element


const myArray = ["Peter Parker", "Miles Morales", "Gwen Stacy"]
myArray.forEach( function (heros) {
    console.log(heros);
} )

// This is how you run a for each loop in javascript
// we could perform other operations as well like

let placeholder = ""
myArray.forEach( (heros) => {
    placeholder = placeholder + " " + heros
} )
console.log(placeholder.trim()); // Peter Parker Miles Morales Gwen Stacy
// trim will remove any unnecessary extra whitespaces

// We iterated over every element in the array and concatenated them together.

const someValue = (item) => {
    console.log("Hello", item);
}
// We could do this too
myArray.forEach(someValue) // passing the reference of function, not function execution itself

// It can have other parameters as well, index and array

myArray.forEach( (heros,index,arr) => {
    console.log(heros,index,arr); 
    // Peter Parker 0 [ 'Peter Parker', 'Miles Morales', 'Gwen Stacy' ]
    // Miles Morales 1 [ 'Peter Parker', 'Miles Morales', 'Gwen Stacy' ]
    // Gwen Stacy 2 [ 'Peter Parker', 'Miles Morales', 'Gwen Stacy' ]
} )


// Sometimes, when we have arrays of objects like
// [{},{},{}]
// For each loop becomes useful when retreiving objects from there as well

const someArray = [
    {
        username: 'Leqdxr',
        age: 20
    },
    {
        username: 'Something',
        age: 19
    },
    {
        username: 'Someone',
        age: 21
    },
]
// to retreieve username and age
someArray.forEach( (obj) => {
    console.log(obj.username);
    console.log(obj.age);
} )

// Leqdxr
// 20
// Something
// 19
// Someone
// 21