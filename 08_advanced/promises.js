// Promises in javascript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value
// A promise has 3 states: Pending, Fulfilled, Rejected

// Creating promises and consuming promises

// Creating
const promiseOne = new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log("Hello World");
        resolve()
    },1000)
})

// Consuming
// then -> concerns resolve
// catch -> concerns reject
// finally -> will execute no matter what (optional)
promiseOne
.then(()=> {
    console.log("Promise Consumed");
})

const promiseTwo = new Promise((resolve,reject)=> {
    const myObj = {
        username: "Aagaman",
        age: 20
    }
    resolve(myObj)
})
.then(function(user) {
    return user.username;
})
.then((user)=>{ // returned value will be returned to the next "then" function
    console.log(user); // user.username has been returned to "user" parameter
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(function(){
        const isPlaying = false
        if(isPlaying) {
            resolve()
        }
        else {
            reject("Error! You are NOT playing")
        }
    },1000)
})

promiseThree
.then(function(){

})
.catch(function(error){
    console.log(error); // Error! You are NOT playing, since isPlaying = false
})
.finally(function(){
    console.log("This runs regardless of outcome");
})


// Instead of then, catch, finally we can use async

const promiseFour = new Promise((resolve,reject)=> {
    let something = false
    if(something) {
        resolve('Something')
    } else {
        reject("Error!!")
    }
})

async function consumePromiseFour() {
    try {
        const response = await promiseFour
        console.log(response);
    }
    catch(error) {
        console.log("E: ", error);
    }
}

consumePromiseFour()

// fetch example with async

async function getPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await response.json() // await because response -> promise object
        console.log(data.species.name);
      }
    catch (error) {
        console.log(error);
    }
}

getPokemon()