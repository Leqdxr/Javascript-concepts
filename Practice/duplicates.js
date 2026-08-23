// Write removeDuplicates(arr) that returns a new array with duplicate values removed.

// if array[i] == arr[i]

const removeDuplicates = (arr) => {
    let cleanArray = []
    for(let i = 0;i<arr.length;i++) {
        if (!cleanArray.includes(arr[i])) {
            cleanArray.push(arr[i])
        }
    }
    return cleanArray
}

console.log(removeDuplicates(["Aagaman","Koirala","Koirala","Test", "Test"]));