// Write sumEvenNumbers(arr) using .reduce(), that sums only the even numbers in the array.

const arr = [1,2,3,4,5,6,7,8,2]
const sumEvenNumbers = arr.reduce( (acc,currVal) => {
    if(currVal % 2 === 0) {
        acc = acc + currVal
    }
    return acc
},0 )

console.log(sumEvenNumbers);