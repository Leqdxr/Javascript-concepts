// Write randomBetween(min, max) using the Math.random formula from your notes then use a loop to call
// it 10 times and log the results.

const randomBetween = (min, max) => {
    return Math.floor(Math.random()*(max-min + 1)+min)
}

for (let i = 1; i<=10; i++) {
    console.log(randomBetween(4,20));
}