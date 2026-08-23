// Write a function checkType(value) that takes anything and returns a string like "
// This is a number" or "This is a string" using typeof. Test it with a number, string, boolean, and null. 

const checkType = (value) => {
    return (`This is a ${typeof value}`)
}

console.log(checkType("Test")) // string
console.log(checkType(1)) // number
console.log(checkType(true)) // boolean
console.log(checkType(233n)) // bigint
console.log(checkType(["Aaaaa","BBbbbbb"])) // This returns object
console.log(checkType({
    name: "Aagaman",
    age: 20
})) // This returns object
function abc () {return 0} // just a normal function created to check it's type
console.log(checkType(abc)); // function
console.log(checkType(null)); // This returns object, even though null is of primitive type
console.log(checkType(undefined)); // This returns undefined