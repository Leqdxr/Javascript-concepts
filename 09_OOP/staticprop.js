class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        return `The username is ${this.username}`
    }
    // static attaches the method on the class itself, not the prototype.
    // so, it's instances can not access this method
    // they are called like User.createId not user1.createId
    static createId() {
        return `123`
    }
}

const user1 = new User("Aagaman")
console.log(user1.logMe()); // The username is Aagaman
// console.log(user1.createId()); // error

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
    teach() {
        return "I am teaching"
    }
}

const teacher1 = new Teacher("Teach","test@test.com")
console.log(teacher1.logMe()) // The username is Teach
console.log(teacher1.teach()) // I am teaching
// console.log(teacher1.createId()) // error

console.log(Teacher instanceof User); // false

console.log(Teacher.createId()) // 123
console.log(User.createId()) // 123