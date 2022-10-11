let myLibrary = [];
let numOfBooks = 0;
const books = document.querySelector(".books");
const bookButton = document.querySelector(".addBook");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.addBookToLibrary = function() {
        myLibrary.push(this);
    }
}
function displayBook() {
    for(let k = numOfBooks; k < myLibrary.length + 1; k++) {
        const addNewBook = document.createElement('div');

        const bookAuthor = document.createElement('h2');
        bookAuthor.innerHTML = `Author: ${myLibrary[k].author}`;
        addNewBook.appendChild(bookAuthor);

        const bookTitle = document.createElement('h2');
        bookTitle.innerHTML = `Title: ${myLibrary[k].title}`;
        addNewBook.appendChild(bookTitle);

        const bookPages = document.createElement('h2');
        bookPages.innerHTML = `Pages: ${myLibrary[k].pages}`;
        addNewBook.appendChild(bookPages);

        addNewBook.classList.add("book");
        books.appendChild(addNewBook);

        numOfBooks++;
    }
}

function createBook() {
    let newBook = new Book(author.value, title.value, pages.value);
    newBook.addBookToLibrary();
    displayBook();
}

bookButton.addEventListener('click', createBook);