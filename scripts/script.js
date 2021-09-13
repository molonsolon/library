let myLibrary = [];
const body = document.querySelector(`body`);
const bookContainer = document.querySelector(`#book-container`)


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
};

// Book.prototype.info = function() {
//     return `${title} by ${author}, ${pages} pages, ${read}`;
// };

const theHobbit = addBookToLibrary(`The Hobbit`, `J.R.R. Tolkien`, `295`, `read`);


// function addBookToLibrary(title, author, pages, read)) {
//     newBook = new Book();
//     myLibrary.push(newBook);
// }

function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const eastOfEden = addBookToLibrary(`East of Eden`, `John Steinbeck`, `612`, `read`);
const theSoundAndTheFury = addBookToLibrary(`The Sound and the Fury`, `William Faulkner`, `217`, `read`);
const bannerOfHeaven = addBookToLibrary(`Under The Banner of Heaven`, `Jon Krakauer`, `434`, `not read yet`);

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        const book = document.createElement(`div`);
        book.classList.toggle('book');
        book.textContent += myLibrary[i].info();
        bookContainer.appendChild(book);
        
    };
}
displayBooks();