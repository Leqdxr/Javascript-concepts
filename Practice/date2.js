// Given two dates like "2026-01-01" and "2026-03-15", write code that calculates how many days are between them.

const myDate = new Date(2026,0,1)
const anotherDate = new Date(2026,2,15)

const myDateTimeStamp = myDate.getTime()
const anotherDateTimeStamp = anotherDate.getTime()


const numberOfDays = Math.abs((myDateTimeStamp-anotherDateTimeStamp)/(1000*60*60*24))
console.log(numberOfDays);