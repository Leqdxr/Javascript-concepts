// for loop


for(let i = 1; i <= 10; i++) {
    console.log(`The value of i is ${i}`);
}
// console.log(i); // Due to block scoping, the value of i is not accesible outside, so this will throw reference error

// This will print "The value of i is 1" until 10.
// basically, for loop will loop through a block of code until the condition is no longer true
// in the code above, condition was i<=10, we initialized value of i as 1.
// i++ means increase the value of i by 1 for next iteration
// so, this executed the loop until the value of i was less than or equal to 10
// it checks condition (i<=10) -> runs blocks -> executes i++, that's why we stop at 10 without going to 11


for (let i = 1; i <=10 ; i++) {
    if (i==5) {
        console.log("5 detected"); // this will be executed if the value of i matches 5
    }
    console.log(i);
}

// this prints value of i from 1 to 10, but before printing "5", it prints "5 detected" and continues the loop as normal

// we can also run a nested for loop

for (let i = 1; i<=10; i++) {
    console.log(`Outer loop value of i: ${i}`);
    for (let j = 1; j<=10;j++) {
        console.log(`Inner loop value of j: ${j}`);
    }
}

// We can use that knowledge to print multiplication table of 1 to 10

for (let i = 1; i<=10; i++) {
    for (let j = 1; j<=10;j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

/*
first of all, the outer for loop is executed, we initialized the value of i in outer for loop as 1
until i is less than or equal to 10, the outer loop will execute. After every iteration, increase the value of i by 1
then we are printing the value of outer loop (i)
it will first print 1, then below we have an inner for loop (which is nested for loop)
now until the inner for loop is not fully executed, outer for loop will not be touched.

so it first prints Outer loop value of i: 1
then prints Inner loop value of j: 1 (until 10)
then it will print Outer loop value of i: 2
then prints Inner loop value of j: 1 (until 10)
and repeat.
*/


// We can also run for loop on arrays

let myArray = ["Peter Parker", "Gwen Stacy", "Miles Morales"]
for (let index = 0; index<myArray.length ; index++) {
    console.log(myArray[index]);
}

// The length of above array is 3
// we initialized the value of "index" variable as 0, so it will execute until "index" is less than 3
// since indexing starts from 0, the code above is printing every element from an array separately
// it will print Peter Parker first then Gwen stacy in a new line and Miles Morales in a new line
// Since we are printing myArray[index], and value of index is increased by 1 after every iteration until its less than 3 
// myArray[0] = Peter Parker, myArray[1] = Gwen Stacy, myArray[2] = Miles Morales


// break and continue

// If we want to stop executing our for loop and jump out of it, we use break

for(let i = 1; i<=10; i++) {
    if(i==5) {
        break;
    }
    console.log(i);
} // this will print 1 2 3 4. Any code written after "break" inside that for loop is not executed
// we first initialized our value of i as 1, it checked if 1 equals 5, which is false so if block is not executed
// it printed 1, then increased the value of i by 1, giving us i = 2. It checked if 2 equals 5, which is false so if block is not executed
// it printed 2, and this same process is repeated. When the value of i was 5, it checked if 5 equals 5, which is true
// so if block was executed, and since we have break statement there, the for loop breaks and any code below it won't run.


// if we want to skip the current iteration if a certain condition meets, we can use continue

for(let i = 1; i<=10; i++) {
    if(i==5) {
        continue;
    }
    console.log("Since I am not 5, i will not be skipped");
    console.log(i);
} // It will print "Since I am not 5, i will not be skipped" followed by "i" from 1 to 10, except for 5
// If at any point the value of i becomes 5, then "continue" will skip the iteration where that condition is true and move to next iteration (i = 6)