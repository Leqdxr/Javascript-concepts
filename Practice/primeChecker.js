// Write isPrime(num) that checks if a number is prime.

const isPrime = (num) => {

    if (num === 2) {
            return `${num} is a prime number`;
        }
    if (num < 2) {
            return `${num} is not a prime number`
        }

    let limit = Math.sqrt(num)
    for(let divisor = 2; divisor <= limit ; divisor++) {
        
        if(num % divisor === 0) {
            return `${num} is not a prime number`
        }
        }
        return `${num} is a prime number`
    }
console.log(isPrime(24));
console.log(isPrime(11));
console.log(isPrime(20));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(9));