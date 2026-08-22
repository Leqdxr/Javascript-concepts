// While loops and do while loops

// In while loop, the loop will execute until a certain condition is true, it accepts only the condition
// while(condition) {}
// The condition is checked first, and if the condition is true, the loop is executed. Or else it is not executed

// In do while loop, a certain task if performed first before checking the condition, the loop will execute as long as the condition is true
// do {
//         } while();
// Do while loop will run atleast once even though the condition may be false. Because condition is checked at last



let i = 1;
while(i<=10) {
    console.log(i);
    i = i+1; // We are increasing the value of i by 1 so the loop can progress. Or else it would be infinite
} // This will give us numbers from 1 to 10

console.log(i); // 11, the value is overwritten as well
// We get 11 because at the end, i = i + 1 became 11, then condition was checked 11 <= 10, false. So we get numbers from 1 to 10. But i = 11 here

// On arrays

let myArray = ["Peter Parker", "Gwen Stacy", "Miles Morales"]
let index = 0
while(index < myArray.length) {
    console.log(myArray[index]);
    index = index+1; // or index++
} // We can get all elements of an array using while loop like this

console.log(index); // 3, the value is overwritten as well

let j = 1;
do {
    console.log("Hello");
    j++
} while(j <= 10);
// This will print "Hello" 10 times

// If the condition was false

do {
    console.log("Hi");
} while(false);
// This would still be executed atleast once giving us 1 "Hi". Because condition is checked later in do while loops