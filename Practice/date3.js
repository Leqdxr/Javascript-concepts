// Write a function addDays(date, days) that takes a Date object and a number, and returns a new Date that many days later.
// Test it by adding 10 days to today's date.

const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days)

    return newDate.toDateString()
}

const today = new Date()
console.log(addDays(today,10));