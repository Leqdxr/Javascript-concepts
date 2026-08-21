// truthy value is when we assume that a certain value is true, and falsy value is when we assume that a certain value is false
// for example, an empty string "" is a falsy value while a string with content inside of it example "aagaman" is a truthy value

// falsy values in javascript are:

// "" - empty string
// 0
// false
// 0n - big int 0
// null
// undefined
// NaN
// -0
// Every other value is a truthy value, including empty objects and empty arrays

//some truthy values in javascript are:
// " " - string with whitespace inside of it, its still true
// "0" - non empty string, it doesn't matter if it has 0 since its a string type not number
// {} - empty objects, still a truthy value
// [] - empty array, still a truthy value
// function() {} - this is also a truthy value


const myArray = []
if(myArray) {
    console.log("This will execute, as [] is a truthy value");
}

const myObj = {}
if (myObj) {
    console.log("This will execute as {} is a truthy value");
}

const myFunc = function() {}
if(myFunc){
    console.log("This will execute as it is a truthy value as well");
}

const myString = ""
if (myString) {
    console.log("This will NOT execute as it is an empty string, falsy value");
}

// How do you check if an array is empty if [] returns true??

if(myArray.length === 0) {
    console.log("The array is empty"); // we can check it like this
}

// How do you check if an object is empty if {} returns true??

if(Object.keys(myObj).length === 0) {
    console.log("The object is empty");
} // What this does is, when we use Object.keys() method it will give us all the keys present in an object in form of an array
// Since we got the output in array form, we can use length property to check if the array is empty
// Since it was indeed empty, it is safe to say object is empty as well.


// Null coalescing operator (??)

// It returns the right hand value only when the left hand value is null or undefined

let value1;
value1 = null ?? 10 // since left hand value is null, it will return right hand value which is 10
console.log(value1);
value1 = undefined ?? 20 // since left hand value is undefined, it will return right hand value which is 20
console.log(value1);
value1 = 30 ?? 40 // since left hand value is NOT undefined OR null, it will return left hand value
console.log(value1);
value1 = null ?? undefined ?? 500 // this returns 500
console.log(value1);


// Terniary operator
// condition ? true : false

const balance = 1000;
(balance>2000) ? console.log("Your balance is greater than 2000") : console.log("Your balance is less than 2000");
// Your balance is less than 2000