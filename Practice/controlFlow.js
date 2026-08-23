// Write a function getGrade(score) 
// using if/else if/else that returns a letter grade (A, B, C, D, F) based on score ranges.

const getGrade = (score) => {
    if(score > 100 || score < 0) {
        return "Please enter a valid range";
    }
    if(score >= 80) {
        return "You got an A";
    }
    else if(score >= 60) {
        return "You got a B";
    }
    else if(score >= 40) {
        return "You got a C";
    }
    else if(score >= 20) {
        return "You got a D";
    }
    else {
        return "You got a F";
    }
}

console.log(getGrade(90));