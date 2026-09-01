class Superhero {
    constructor(name,power,city) {
        this.name = name
        this.power = power
        this.city = city
    }
    // getter and setter are used when we want to have control over how the data is retreieved or set

    // while retreiving name, return "Yo my name is <whatever user passes the name as>"
    
    get name() {
        return `Yo my name is ${this._name}`
    }

    // while setting name value, we want the name to be in all upper case and add a random number from 1 to 10
    set name(value) {
        this._name = `${value.toUpperCase()}${Math.floor(Math.random()*10+1)}`
    }
}

const spiderman = new Superhero("Peter Parker","Spider Sense","Queens")
console.log(spiderman.name);