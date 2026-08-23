// Making a counter


const Counter = () => {
    let count = 0
    return () => {
        return count++
    }
}

const myCounter = Counter()
console.log(myCounter()); // 0
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

// increases each time you call it