function SetUsername(username) {
    this.username = username
}

function CreateUser(username,email,password) {
    // call() lets us use a method belonging to other object
    // we can also call a function with specific "this"
    // In this specific case, in the code below, we are letting SetUsername borrow CreateUser's "this"
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const user1 = new CreateUser("Aagaman","aagaman@test.com","123")
console.log(user1);