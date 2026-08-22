// for in loop
// this is used to loop over keys/properties of an objects

const myObj = {
    name: 'Peter Parker',
    age: 17,
    occupation: 'Student'
}

for(const key in myObj) {
    console.log(key); // This would give us all the keys
}

// If we want to print value then

for(const key in myObj) {
    console.log(myObj[key]); // This would give us the values
}

for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}`);
}


// We could use this to iterate over arrays as well because arrays has it's own keys too which starts from 0

const myArray = [1,2,3,4,5]
for (const key in myArray) {
    console.log(key); // This would give us 0 1 2 3 4
}

// If we want to extract values from it we can use

for(const key in myArray) {
    console.log(myArray[key]); // we get the actual values now
}

// But using for of loop for arrays is more simple

// For maps, for...in wouldn't work because for...in can iterate over an object's enumerable properties
// but in case of map, data is stored as map entries in key-value pair not enumerable properties


const map = new Map()
map.set("ID",2400000)
map.set("Phone", 9213824213)
map.set("Country","Nepal")

for (const key in map) {    
    console.log(key);
} // wouldn't work