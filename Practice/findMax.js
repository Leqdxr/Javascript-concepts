// Write findMax(arr) that returns the largest number in an array without using Math.max.

const findMax = (arr) => {
    let maxValue = arr[0]
    for (let i = 0; i<arr.length;i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    return maxValue
}

console.log(findMax([2,6,4,5]));
