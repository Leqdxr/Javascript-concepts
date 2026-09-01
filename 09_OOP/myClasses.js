class User {
    // constructor is automatically called whenever a new object is created, it is used to initialize an object
    constructor(username,email,password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass() {
        return `${this.password}w994$4$4$$2as`
    }

    upperMail() {
        return `${this.email.toUpperCase()}`
    }
}

const user1 = new User("Aagaman","aagaman@test.com","123")
console.log(user1.encryptPass());
console.log(user1.upperMail());


// Behind the scene

function UserBehind(username,email,password) {
        this.username = username
        this.email = email
        this.password = password
    }

    UserBehind.prototype.encryptPass = function() {
        return `${this.password}w994$4$4$$2as`
    }

    UserBehind.prototype.upperMail = function() {
        return `${this.email.toUpperCase()}`
    }


const user2 = new UserBehind("Aagaman","aagaman@anothertest.com","223")
console.log(user2);
console.log(user2.upperMail());
console.log(user2.encryptPass());