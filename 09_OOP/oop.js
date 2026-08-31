// This is a constructor function
function User(name, age, isLoggedIn) {
    this.username = name
    this.age = age
    this.isLoggedIn = isLoggedIn

    this.greetUser = function() {
        // this.name will return undefined, because the object has no "name" property. "name" is an argument that we passed into constructor function
        // "name" gets assigned to "username" property, so the correct way to access it is to use "this.username" instead
        // for clarity we could've accepted "username" as a parameter instead of "name" and wrote "this.username = username"
        console.log(`Welcome, ${this.username}`)
    }
}

// constructor -> new
const object1 = new User("Aagaman",20,true)
const object2 = new User("Someone",21,false)
// new keyword is used to initialize an object, it creates an empty object first {}
// after that it passes the values as argument to constructor function
// this points to the new empty object and values are assigned via this keyword
// object is returned automatically


console.log(object1);
console.log(object2);
object1.greetUser()
object2.greetUser()

// .constructor will point to the object's constructor function. In this case, "User"
console.log(object1.constructor)
console.log(object2.constructor)