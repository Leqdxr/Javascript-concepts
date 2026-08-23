// Given an array of numbers, chain .filter() and .map() together to return the squares of only the even numbers.


const myArray = [1,2,3,4,5,6]
const chainedArray = myArray
                            .filter((num) => num%2===0)
                            .map( (num) => Math.pow(num,2))
console.log(chainedArray);