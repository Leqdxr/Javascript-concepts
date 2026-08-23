// Given an array of numbers, use .filter() to return only the numbers greater than 10.

const myArray = [42,30,9,2,3,89,20,10,11]
const greaterThanTen = myArray.filter( (currentVal) => (currentVal > 10) )

console.log(greaterThanTen);