// switch statements are useful when you are comparing a value to multiple conditions
// for example in one.js we compared "balance" with multiple conditions, we could've used switch case instead

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Basically we have a key, and we need to compare it with multiple cases.
// when a certain case matches, the code within that case is executed.


const month = "December"

switch(month) {
    case "January":
        console.log("Its January");
        break;
    case "February":
        console.log("Its February");
        break;
    case "March":
        console.log("Its March");
        break;
    case "April":
        console.log("Its April");
        break;
    case "May":
        console.log("Its May");
        break;
    case "June":
        console.log("Its June");
        break;
    case "July":
        console.log("Its July");
        break;
    case "August":
        console.log("Its August");
        break;
    case "September":
        console.log("Its September");
        break;
    case "October":
        console.log("Its October");
        break;
    case "November":
        console.log("Its November");
        break;
    case "December":
        console.log("Its December"); // this will be executed
        break;
    default:
        console.log("Invalid month");
        break;
}

const intValue = 3
switch (intValue) {
    case 1:
        console.log("Yeah");
        break;
    case 2:
        console.log("Yeah 2");
        break;
    case "3":
        console.log("Yeah 3");
        break;
    default:
        console.log("Yo"); // This will be executed, it does equality check strictly.
        break;
}

// not entering "break" keyword would result in every code after the case or default block to be executed

const x = 1
switch(x) {
    case 1:
        console.log("one")
    case 2:
        console.log("two")
    default:
        console.log("default")
} // one two default

// there is no strict rule that default has to be at the end, it can be anywhere within switch statement

const y = 3
switch(y) {
    case 1:
        console.log("one")
        break
    default:
        console.log("default")
        
    case 2:
        console.log("two")
        break
} // default, two