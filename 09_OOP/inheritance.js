class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`The username is ${this.username}`);
    }
}

// Teacher will inherit properties of User class
class Teacher extends User {

}

const user1 = new User("Aagaman")
// The username is Aagaman
user1.logMe()

const teacher1 = new Teacher("A Teacher")
// The username is A Teacher
teacher1.logMe()

console.log(teacher1 instanceof Teacher); // true
console.log(teacher1 instanceof User); // true

class Admin extends User {
    constructor(username,email,password) {
        // super(username) calls the User's constructor passing along the username parameter
        super(username)
        this.email = email
        this.password = password
    }

    logIn() {
        console.log("Admin logged in");
    }
}

const admin = new Admin("user","test@gmail.com",123)
console.log(admin);
// The username is user
admin.logMe()
// Admin logged in
admin.logIn()