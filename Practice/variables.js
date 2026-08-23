//  Given let a = 5; let b = a; then b = 10, what are the final values of a and b, and why.
//  Now do the same with two objects instead of numbers and explain the difference.

let a = 5
let b = a
b = 10

console.log(a); // 5
console.log(b); // 10

// Primitive types have stack memory. In the code above, b is COPYING the value of "a" in line number 5
// so until line 5, a = 5 and b = 5 as well. Hard copy of the value is created and stored in the memory.
// When it comes to line 6, b gets reassigned to 10 but a value doesn't change.
// This is because, we created a hard copy

let c = [1,2,3]
let d = c
console.log(c); // [1,2,3]
console.log(d); // [1,2,3]

d.pop()

console.log(d); // [1,2]
console.log(c); // [1,2]

// We only popped the value of d, so why was the value of c changed as well?
// This is because, objects are of reference type and use heap memory.
// d and c are pointing at the same value since d = c.
// when d is modified, the value of c will change as well since they were referencing the same value

// If we had explicitly reassigned the value of d such that d = [1,2,3]
// then they would no longer be pointing at the same value, d would point at the newly assigned value (which is allocated differently in memory)