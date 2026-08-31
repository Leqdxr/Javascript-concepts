function Users(email, phone) {
    this.email = email
    this.phone = phone
}

// we can use .prototype to define our own methods which objects can inherit
Users.prototype.eat = function() {
    console.log("I am eating");
}

const user1 = new Users("someone@test.com",982030129)
console.log(user1);

user1.eat() // I am eating

// What happens when new keyword is used
// An object is initilized
// The object is linked to prototype property of constructor function
// The constructor function is called
// The new object is returned