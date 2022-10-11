let myLibrary = [];
let numOfBooks = 0;
let bookNumber = 0;
const books = document.querySelector(".books");
const bookButton = document.querySelector(".addBook");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const yesRead = document.querySelector(".yes");
    yesRead.addEventListener('click', readBook);
const noRead = document.querySelector(".no");
    noRead.addEventListener('click', didNotReadBook);

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.addBookToLibrary = function() {
        myLibrary.push(this);
    }
}
function displayBook() {
    for(let k = numOfBooks; k < myLibrary.length; k++) {
        const addNewBook = document.createElement('div');

        const bookAuthor = document.createElement('h3');
        bookAuthor.textContent = `Author: ${myLibrary[k].author}`;
        addNewBook.appendChild(bookAuthor);

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = `Title: ${myLibrary[k].title}`;
        addNewBook.appendChild(bookTitle);

        const bookPages = document.createElement('h3');
        bookPages.textContent = `Pages: ${myLibrary[k].pages}`;
        addNewBook.appendChild(bookPages);

        const read = document.createElement('h3');
        if(readIt)  read.textContent = "Read it";
        else        read.textContent = "Did not read it!"
        addNewBook.appendChild(read);

        const remove = document.createElement('button')
        remove.textContent = "Remove";
        remove.style.backgroundColor = "red"
        addNewBook.appendChild(remove);
        remove.addEventListener('click', removeBook);

        addNewBook.classList.add("book");
        books.appendChild(addNewBook);

        numOfBooks++;
    }
}

function readBook() {
    readIt = true;
}
function didNotReadBook() {
    readIt = false;
}
function removeBook() {
}
function createBook() {
    let newBook = new Book(author.value, title.value, pages.value, readIt);
    newBook.addBookToLibrary();
    displayBook();
}

bookButton.addEventListener('click', createBook);