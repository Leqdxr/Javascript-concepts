const myArray = ["Peter Parker", "Miles Morales", "Gwen Stacy"]

const storingArray = myArray.forEach( (item) => { 
    console.log(item);
    return "A return value"
 } )
 
 console.log(storingArray); 
// We get undefined at the end even though we have a return value
// this is because forEach does not return anything



// filter
// if we want to return something that satisfies a certain condition we use filter

const movies = [
    { title: 'Iron Man', genre: 'Action', release: 2008, boxOffice: 585 },
    { title: 'Thor', genre: 'Fantasy', release: 2011, boxOffice: 449 },
    { title: 'The Avengers', genre: 'Action', release: 2012, boxOffice: 1519 },
    { title: 'Guardians of the Galaxy', genre: 'Sci-Fi', release: 2014, boxOffice: 773 },
    { title: 'Ant-Man', genre: 'Comedy', release: 2015, boxOffice: 519 },
    { title: 'Doctor Strange', genre: 'Fantasy', release: 2016, boxOffice: 677 },
    { title: 'Black Panther', genre: 'Action', release: 2018, boxOffice: 1347 },
    { title: 'Captain Marvel', genre: 'Sci-Fi', release: 2019, boxOffice: 1128 },
    { title: 'Shang-Chi', genre: 'Action', release: 2021, boxOffice: 432 },
];

let marvelMovies = movies.filter( (mcu) => {
    return mcu.genre === "Fantasy";
} )

console.log(marvelMovies);
// This will return the movie whose genre is Fantasy
// Basically, we can filter out the array that do not meet certain condition, and return those who do

marvelMovies = movies.filter( (mcu) => (mcu.release >= 2016) )
console.log(marvelMovies); // It will give us all the movies released after or during 2016

// If we want to check multiple conditions we use AND operator (&&)

marvelMovies = movies.filter( (mcu) => {
    return mcu.genre === "Action" && mcu.release >= 2016;
} )

console.log(marvelMovies); // It will return the movies whose genre is action and released after or during 2016


// Filter ALWAYS returns an array, even if nothing matches, we still get an empty array [] not undefined or null