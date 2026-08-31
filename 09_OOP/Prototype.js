// Prototypal inheritence example
const student = {
    earns: true
}

const teacher = {
    // teacher will inherit properties of student
    __proto__: student
}

const employer = {
    work: true
}

const employee = {

}

console.log(teacher.earns) // true

// Modern syntax in javascript
Object.setPrototypeOf(employee, employer)
console.log(employee.work); // true


// Creating a new method accessible by all Objects
Object.prototype.trueLength = function() {
    console.log(`The true length is: ${this.trim().length}`)
}

const myString = "   Aagaman   "
// The true length is: 7
myString.trueLength()
// The true length is: 4
" Test    ".trueLength()