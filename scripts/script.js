let myLibrary = [];
const body = document.querySelector(`body`);
const bookContainer = document.querySelector(`#book-container`);
const addBookButton = document.querySelector(`#new-book-btn`);
const addBookForm = document.querySelector(`#new-book-form`)
const eastOfEden = addBookToLibrary(`East of Eden`, `John Steinbeck`, `612`, `read `);
const theSoundAndTheFury = addBookToLibrary(`The Sound and the Fury`, `William Faulkner`, `217`, `read `);
const bannerOfHeaven = addBookToLibrary(`Under The Banner of Heaven`, `Jon Krakauer`, `434`, `not read yet `);
const theHobbit = addBookToLibrary(`The Hobbit`, `J.R.R. Tolkien`, `295`, `read `);
const formElements = addBookForm.elements;
const formClose = document.querySelector(`#form-close`); 
const formSubmit = document.querySelector(`#new-book-submit`);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        bookArray = [title, `by`, `${author},`, pages, `pages,`, read];
        return bookArray.join(` `);

    };
    this.toggleRead = function() {
        console.log(this.read);
        if (this.read === `not read yet `) {
            this.read = `read `;
            bookArray = [title, `by`, `${author},`, pages, `pages,`, `read`];
            return bookArray.join(` `);
            
        } else if (this.read === `read `) {
            this.read = `not read yet `;
            bookArray = [title, `by`, `${author},`, pages, `pages,`, `not read yet`];
            return bookArray.join(` `);
        } else {
            this.read === `ERROR`;
            return alert(`ERROR`);
        }
    };
    
};



function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}
// Book.prototype.info = function() {
//     return `${title} by ${author}, ${pages} pages, ${read}`;
// };

function addNewBook (title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    const book = document.createElement(`div`);
    book.classList.toggle('book');
    book.textContent += newBook.info();
    book.setAttribute(`data-book-number`, `${myLibrary.length}`)
    
    
    bookContainer.appendChild(book);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        
        
        const book = document.createElement(`div`);
        book.classList.toggle('book');
        book.classList.toggle(`card`);
        book.classList.toggle(`col-lg`);
        book.setAttribute(`data-book-id`, `${i}`);
        
        const bookTitle = document.createElement(`p`);
        bookTitle.textContent = myLibrary[i].info();
        bookTitle.setAttribute(`data-book-title`, `${i}`);
        bookTitle.classList.toggle(`book-title`);
        bookTitle.classList.toggle(`card-header`)


        const removeBookBtn = document.createElement(`button`);
        removeBookBtn.classList.toggle(`remove-book-btn`);
        removeBookBtn.textContent = `x`;
        removeBookBtn.classList.toggle(`card-footer`)
        
        const readButton =  document.createElement(`button`);
        readButton.setAttribute(`id`,`read-btn`);
        readButton.textContent = `read status`;
        readButton.classList.toggle(`card-footer`);
        
        
        bookContainer.appendChild(book);
        book.appendChild(bookTitle)
        book.appendChild(removeBookBtn);
        book.appendChild(readButton);

        removeBookBtn.addEventListener(`click`, () => {
            bookContainer.removeChild(book);
        });

        readButton.addEventListener(`click`, () => bookTitle.textContent = myLibrary[i].toggleRead());
    };
};




addBookButton.addEventListener(`click`, () => {
    addBookForm.classList.toggle(`form-off`);

});

formClose.addEventListener(`click`, () => {
    addBookForm.classList.toggle(`form-off`);

})



formSubmit.addEventListener(`click`, () => {
    const formTitle = addBookForm.elements[1].value;
    const formAuthor = addBookForm.elements[2].value;
    const formPages = addBookForm.elements[3].value;
    const formReadRadio = addBookForm.elements.read;
    addNewBook(formTitle, formAuthor, formPages, formReadRadio.value);
})


// function addBookToLibrary(title, author, pages, read)) {
//     newBook = new Book();
//     myLibrary.push(newBook);
// }




displayBooks();