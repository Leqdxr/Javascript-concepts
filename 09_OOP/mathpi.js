// If we try to reassign Math.PI value, we can't

Math.PI = 5
console.log(Math.PI); // 3.14159.....

// The reason for this will be understood once we look into getOwnPropertyDescriptor method

const mathpi = Object.getOwnPropertyDescriptor(Math, "PI") // From math, "PI" property's description, this shows hidden details about an object
console.log(mathpi); // writeable: false, enumerable: false, configurable: false
// Since writeable is false, we can't reassign it's value
// configurable: false means can't change the flags afterwards too, so it's locked and we can't modify it's value to true

// Let's try creating our own object and define some property of our own

const user1 = {
    username: "Aagaman",
    age: 20
}

const descUser1 = Object.getOwnPropertyDescriptor(user1, "username") // from user1, username property
console.log(descUser1); // writeable: true, enumerable: true
// Let's make it enumerable: false so the loops can skip "username" property

Object.defineProperty(user1, "username", {
    enumerable: false
})

const updatedDesc = Object.getOwnPropertyDescriptor(user1, "username")
console.log(updatedDesc); // enumerable is now false

// let's try looping over it

for(const [key,value] of Object.entries(user1)) {
    console.log(`${key} : ${value}`);
} // It will skip over "username" and we only get age: 20 since we modified username to be enumerable now
