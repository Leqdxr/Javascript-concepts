// reduce
// reduce in javascript takes an array, boils it down to a single value that could be a number, string, array, an object whatever you want

// It has 3 parts:
// Accumulator - The container that holds the results so far and updates every iteration
// Current Value - the current item that is being processed
// initial value - The value initialized at first for accumulator


const myNumber = [1,2,3,4,5,6]
// We want to add them all and return a single value
// We can reduce
const myTotal = myNumber.reduce( function (acc,currVal) { // acc = accumulator, currVal = current value. It can be named anything its just for readability
    console.log(`The value for accumulator is ${acc} and current value is ${currVal}`);
    return acc + currVal;
},0 ) // 0 = initial value for accumulator

console.log(myTotal); // 21

// We can write this with arrow function as well

const myNewTotal = myNumber.reduce( (acc,currVal) => (acc+currVal), 0 ) // acc = 1st parameter so whatever acc+currVal returns gets passed to acc
console.log(myNewTotal); // 21 as well

// A program to return only the even numbers from a set of array

const myArray = [1,2,3,4,5,6,7,8,9,10]
const myEven = myArray.reduce( (acc, currVal) => {
    if(currVal % 2 === 0) {
        acc.push(currVal)
    }
    return acc
}, [] )

console.log(myEven); // [2,4,6,8,10]



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Task: To add all prices in the shopping cart
// We could use reduce here as well

const myShopTotal = shoppingCart.reduce( (acc,currVal) => (acc + currVal.price), 0)
console.log(myShopTotal); // 22996