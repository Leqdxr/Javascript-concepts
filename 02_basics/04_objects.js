// const myObj = new Object()
// console.log(myObj); // {}

const guestUser = {}; // We can declare an object like this as well, this is an object literal as well
// To add key value pairs in this object
guestUser.email = "aagaman@google.com";
guestUser.phone = 9811112223;
guestUser.isLoggedIn = false;

console.log(guestUser); // { email: 'aagaman@google.com', phone: 9811112223, isLoggedIn: false }

console.log(guestUser.email); // aagaman@google.com

// You can nest objects inside another object

const regularUser = {
    address: "kathmandu",
    information: {
        height: "6'2",
        bloodGroup: "B+",
        school: {
            locatedIn: "hetauda",
            scoredAce: true
        }
    }
}; // It is completely possible for our objects to look like this as well

// You would access the key value pair in a nested object as normal

console.log(regularUser.information);
/*
output:
{
  height: "6'2",
  bloodGroup: 'B+',
  school: { locatedIn: 'hetauda', scoredAce: true }
}
*/
// You can be more precise
console.log(regularUser.information.school); // { locatedIn: 'hetauda', scoredAce: true }

// Let's say we want to merge objects together, we can use spread operator for that here as well (like we did for arrays)

const firstObj = {1: "a", 2: "b"};
const secondObj = {4: "a", 5: "b"};
const thirdObj = {6: "a", 7: "b"};

const mergedObjects = {...firstObj, ...secondObj, ...thirdObj};
console.log(mergedObjects); // { '1': 'a', '2': 'b', '4': 'a', '5': 'b', '6': 'a', '7': 'b' }

const numObj1 = {1: 1, 2: 2};
const numObj2 = {3: 2, 4: 5};
const combineNum = {...numObj1,...numObj2};
console.log(combineNum); // { '1': 1, '2': 2, '3': 2, '4': 5 }


// The example above, spread operator is a modern alternative to Object.assign()
// It takes a target and source as arguments and copies properties of source to target
// There can be more than 1 source but only 1 target

const user1 = {
    name: "Aagaman"
}

const user2 = {
    city: "kathmandu"
}

Object.assign(user1,user2); // Object.assign(target,source) user1 -> target, user2 -> source

console.log(user1); // { name: 'Aagaman', city: 'kathmandu' }

// This will modify the target's original value
// Let's try storing it in a new variable
const user3 = {
    height: 170
}

const result = Object.assign(user1,user3);
console.log(result); // { name: 'Aagaman', city: 'kathmandu', height: 170 }
console.log(result==user1); // true, they will refer to the same object


// However, we can also declare a new variable and assign {} as target so original value is not modified

const user4 = {
    weight: 70
}
const newVar = Object.assign({},user1,user4);
console.log(newVar);
console.log(user1==newVar); // false

// If they have the same key, for example

const numericObj1 = {
    num1: 203,
    num2: 404
}

const numericObj2 = {
    num1: 300,
    num3: 404
}

const anotherObj = Object.assign({},numericObj1,numericObj2);
console.log(anotherObj); // { num1: 300, num2: 404, num3: 404 }
// num1's value will be overriden by whichever num1 was declared last.


// Let's say we have an array of objects

const users = [
    {
        id:1,
        email: "1@gmail.com"
    },
    {
        id:2,
        email: "2gmail.com"
    },
    {
        id:3,
        email: "3@gmail.com"
    }
];

// We can use indexing in this as well

console.log(users[1]); // { id: 2, email: '2gmail.com' }
console.log(users[1].email); // We can access values of that specific object in an array of objects like this

console.log(Object.keys(guestUser)); // We can extract all the keys from an object like this
// [ 'email', 'phone', 'isLoggedIn' ]
// The result is in the form of an array
// Similarly, we can also extract values
console.log(Object.values(guestUser)); // [ 'aagaman@google.com', 9811112223, false ]
// The result is in the form of an array as well

console.log(Object.entries(guestUser)); // This will give us all key value pairs in form of an array, each key-value pair is 1 element
/*
output:
[
  [ 'email', 'aagaman@google.com' ],
  [ 'phone', 9811112223 ],
  [ 'isLoggedIn', false ]
]
*/

// If we want to check if our object has a certain key or not, we can use hasOwnProperty method

console.log(guestUser.hasOwnProperty('phone')); // true
console.log(guestUser.hasOwnProperty('Phone')); // false

// ================================= De-structuring and JSON ===============================

const course = {
    courseName: "100 days of Python",
    courseInstructor: "Angela Yu",
    coursePrice: 9.99
}

// Let's say we want to use courseInstructor inside of course object a lot of times in our code.
// It will be unnecessarily complex if we start using it through dot or square/bracket notation everytime
// Here, we can use the concept of destructuring

const {courseInstructor} = course; // Now we can use "courseInstructor" without having to worry about dot notation
// It extracts the property into a variable so you can refer to that variable directly
console.log(courseInstructor);

// If we'd like, we can assign a different variable for it as well. Let's assign one to courseName

const {courseName: nameCourse} = course; // Now if we log nameCourse
console.log(nameCourse); // 100 days of python


console.log(course.courseName); // This would still work
console.log(course.nameCourse); // However, this would print undefined. Because it doesn't really change anything about the actual course object

// JSON

// JSON stands for JavaScript Object Notation. It is a plain text/data format but not actually an object.
// JSON object property names must be in double quotes (unlike objects where it is more forgiving in that case)
// You can't have undefined values
// You can't have any comments
// You can't have any functions, trailing commas. It's just a plain text/data format.
// For example, our regularUser object above is a valid javascript object but invalid JSON.

// {
//     "name":"Aagaman",
//     "age": 20,
//     "isLoggedIn": true,
//     "occupation": "student"
// } // This is an example of a valid JSON. This looks similar to object, but they are not the same
// // APIs commonly return data in JSON format

// // We may also in some cases obtain APIs in format of Arrays, which will look like this

// [
//     {},
//     {},
//     {}
// ]

// Useful link https://jsonformatter.org/