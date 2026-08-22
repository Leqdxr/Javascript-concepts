// map
// map in javascript will return a brand new array after performing certain operations on it
// it will return a certain value instead of giving "undefined" like forEach loop

const myArray = ["Peter Parker", "Miles Morales", "Gwen Stacy"]
const newArray = myArray.map( (item) => {
    return item + " man ";
})

console.log(newArray); // [ 'Peter Parker man ', 'Miles Morales man ', 'Gwen Stacy man ' ]

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = myNumbers.map( (num) => num+20 )
console.log(newNumbers);
// [
//   21, 22, 23, 24, 25,
//   26, 27, 28, 29, 30
// ]

// Chaining
// We can call multiple map() methods one after another and we can mix in filter() method as well
// Each step will run in order and the result is passed to next step instead of immediately storing it in a variable

const anotherNumber = myNumbers
                            .map( (num) => num * 10 ) // The result of this is not immediately stored to anotherNumber variable
                            .map( (num) => num + 1) // The result of first map is passed here, so the numbers we receive here are all multiplied by 10 we simply add +1 here
                            .filter( (num) => num>20 && num < 70);
console.log(anotherNumber);