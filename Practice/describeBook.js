// Create an object representing a book (title, author, year, price). 
// Write a function describeBook(book) that returns a formatted sentence using template literals.

const bookInfo = {
    title: "One Piece",
    author: "Eiichiro Oda",
    year: 1997,
    price: 200
}

const describeBook = (book) => {
    return `The title of the book is ${book.title} which was written by ${book.author} in the year ${book.year}. This book costs around ${book.price}`;    
}

console.log(describeBook(bookInfo));

const anotherBook = {
    title: "Berserk",
    author: "Kentaro Miura",
    year: 1989,
    price: 150
}

console.log(describeBook(anotherBook))