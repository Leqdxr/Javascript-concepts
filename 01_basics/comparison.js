console.log(2==2); /*
 It's loose equality check, it checks if the two values are equal. It allows type conversion if necessary
 for example when we are dealing with "2" == 2, string gets converted to a number
*/
console.log(0==true); // Output: false (as true = 1 and 0 is not equal to 1)
console.log(1 == true); // Output: true (as true = 1 and 1 is equal to 1)
console.log(2!=2); // It checks if a value is NOT equal to something != means does not equal to
console.log(2>2); // Checks if a value is greater than something
console.log(2<2); // Checks if a value is less than something
console.log(2>=2); // Checks if a value is greater than or equal to something
console.log(2<=2); // Checks if a value is less than or equal to something
console.log("2"===2); /*
 Strict equality check, it checks if two operands are equal also considering their data types
 So in this case, unlike with the loose equality check, we would get "false" as our output. As one is string, other is a number
*/

// All the output will be printed as a boolean.

console.log("2" == 2); /* 
This would print "true" because its a loose equality check. As mentioned above, string "2" gets converted to a number
then it is compared with the other number and result is printed as a boolean
*/
console.log("02" == 2); // Same case as above, output would be true

console.log(null > 0); // false (null becomes 0 and 0 is not greater than 0)
console.log(null == 0); // false (null is only equal to undefined or itself, so this is false)
console.log(null<0); // false (null becomes 0 and 0 is not less than 0)
console.log(null>=0); // true (null becomes 0 and 0 is greater than OR equal to 0 so its true)
console.log(null===0); // false (null is not equal to 0, no type conversion occurs as well)
/*
This is where it gets mostly confusing.
Equality check (==) and comparisons (> < >= <=) work differently.
Comparisons convert null into a number, (null becomes 0 in this case).
While in loose equality check, null is only equal to undefined or itself. It is not equal to 0.
*/

// Important note: strict equality check (===) does NOT allow type conversion while comparing.

console.log(null == null); // True
console.log(null === null); // True
console.log(null == undefined); // True
console.log(null === undefined); // False
