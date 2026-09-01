function Superhero(name,power,city) {
        this._name = name
        this._power = power
        this._city = city

    Object.defineProperty(this, 'name', {
        get: function() {
            return `Yo my name is ${this._name}`
        },
        
        set: function(value) {
            this._name = `${value.toUpperCase()}${Math.floor(Math.random()*10+1)}`
        }
    })
}
const spiderman = new Superhero("Peter Parker","Spider Sense","Queens")
spiderman.name = "something"
console.log(spiderman.name);