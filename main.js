const newBook = document.querySelector(".newBook"); newBook.addEventListener('click', addBookToLibrary);
let bookCounter = 0;
    let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
     
}