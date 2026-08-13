// Dates in javascript
// Date object is used to represent a specific point in time.

const myDate = new Date(); // A date object is created and stored in myDate
console.log(myDate); // Display the current time in UTC format, for example right now it displays 2026-08-13T14:46:40.673Z
/* It keeps on changing as the time goes on
 2026 = year, 08 = month, 13 = date, T14:46:40 means that it is currently 14:46 (or 2:46pm), 40 seconds 
 and 673 before the "Z" means miliseconds. "Z" represents UTC timezone. It is a bit complicated to understand.
 */

console.log(typeof myDate); // object
console.log(myDate.toDateString()); // It shows the current date in string format
// For example, right now its showing me Thu Aug 13 2026

console.log(myDate.toISOString()); // It shows the current date in ISO 8601 format while also converting it to a string
// For example, right now its showing me 2026-08-13T:14:51:38.732Z

console.log(myDate.toJSON()); // It also shows the current date in ISO 8601 string format like .toISOString() above
/*
You rarely call this one directly like we did here.
In real code, JSON.stringify() calls .toJSON() automatically whenever it 
needs to convert a Date object into a string (since JSON has no native "Date" type)
*/

// Let's say you write an invalid date and time

const badDate = new Date("Something that is not valid");
 // console.log(badDate.toISOString()); // This will throw an error "Invalid Time Value" (Which is why its commented out)
console.log(badDate.toJSON()); // This returns null
// If the date is invalid, .toJSON() returns null. Whereas, .toISOString() throws an error.


console.log(myDate.toLocaleDateString()); // Returns date in human readable format, no time. (No "T"/"Z")
// For example this one returns en-US locale date (8/13/2026) currently. However, you can specify the locale too.

console.log(myDate.toLocaleDateString("ja-JP")); // This is for japanese locale
// Output will be 2026/8/13

const specificDate = new Date(2026, 11, 4); // You can pass in parameters too, in format of year, month, day, hours, minutes, seconds, milisecond
// Months start from 0, meaning 0 = January and 11 = December.
// In the above code we have entered 2026, 11, 4 which is 4th of December 2026
console.log(specificDate.toDateString()); // Fri Dec 04 2026

// You can also pass parameters in string format

const stringDate = new Date("2026-08-13T15:39:44.178Z");
console.log(stringDate.toDateString()); // Thu Aug 13 2026 (which is today's date)
// It will return Invalid Date if you pass in invalid parameters

console.log(myDate.toString()); // Returns full date and time unlike .toDateString() which only gives the date
// Output: Thu Aug 13 2026 21:26:41 GMT+0545 (Nepal Time) (which is the current time)



const myTimestamp = Date.now();
console.log(myTimestamp);
/*
Important thing to note is that, January 1 1970 00:00:00 (The Unix Epoch) is treated as time = 0 for computers
This specific line of code above counts how many miliseconds have passed since January 1 1970 00:00:00 and displays it
It's an ever increasing number, since time keeps moving on

Currently, the output is 1786636150242
*/


// We can also use get methods

const getDate = new Date(); // getDate is variable name here

const year = getDate.getFullYear();
const month = getDate.getMonth(); // Since month starts from 0, it will display current month (for example august) as 7 instead of 8. But we can add 1 to it if needed
const day = getDate.getDate();
const hours = getDate.getHours();
const seconds = getDate.getSeconds();
const miliseconds = getDate.getMilliseconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(seconds);
console.log(miliseconds);

// We can also customize .toLocaleString() like this

const monthName = getDate.toLocaleString("default", {
    month: "long"
}); // Will display August instead of 8/13/2026, 9:51:37 PM
console.log(`It is the year ${year} and the month is ${monthName}`);