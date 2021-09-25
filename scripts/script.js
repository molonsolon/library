


let myLibrary = [];
const body = document.querySelector(`body`);
const bookContainer = document.querySelector(`#book-container`);
const addBookButton = document.querySelector(`#new-book-btn`);
const addBookForm = document.querySelector(`#new-book-form`)
const eastOfEden = addBookToLibrary(`East of Eden`, `John Steinbeck`, `612`, `Read `);
const theSoundAndTheFury = addBookToLibrary(`The Sound and the Fury`, `William Faulkner`, `217`, `Read `);
const bannerOfHeaven = addBookToLibrary(`Under The Banner of Heaven`, `Jon Krakauer`, `434`, `Not read yet `);
const theHobbit = addBookToLibrary(`The Hobbit`, `J.R.R. Tolkien`, `295`, `Read `);
const chaosBook = addBookToLibrary(`Chaos`, `Tom O'Neill`, `528`, `Not read yet `)
const formElements = addBookForm.elements;
const formClose = document.querySelector(`#form-close`);
const formSubmit = document.querySelector(`#new-book-submit`);
let rowNumber = 0;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        bookArray = [title, `<br>`, `by`, author, `<br>`, pages, `pages`, `<br>`, read];
        return DOMPurify.sanitize(bookArray.join(` `));

    };
    this.toggleRead = function () {
        console.log(this.read);
        if (this.read === `Not read yet `) {
            this.read = `Read `;
            bookArray = [title, `<br>`, `by`, author, `<br>`, pages, `pages`, `<br>`, `Read`];
            return DOMPurify.sanitize(bookArray.join(` `));

        } else if (this.read === `Read `) {
            this.read = `Not read yet `;
            bookArray = [title, `<br>`, `by`, author, `<br>`, pages, `pages`, `<br>`, `Not read yet`];
            return DOMPurify.sanitize(bookArray.join(` `));
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

function addNewBook(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.unshift(newBook);
    removeAllChildren(bookContainer);
    displayBooks();
}

function removeAllChildren(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
}

function displayBooks() {
    for (let i = myLibrary.length-1; i >= 0; i--) {

        if (i % 4 === 0 || i === myLibrary.length-1) {
            rowNumber += 1;
            const addBookRow = document.createElement(`div`);
            addBookRow.classList.toggle(`row`);
            const previousBookRow = document.querySelector(`#book-row-${rowNumber-1}`)
            
            addBookRow.setAttribute(`id`, `book-row-${rowNumber}`);

            bookContainer.insertBefore(addBookRow, previousBookRow);
        }

        const bookRow = document.getElementById(`book-row-${rowNumber}`);

        const book = document.createElement(`div`);
        book.classList.toggle(`card`);
        book.classList.toggle(`col-sm`);
        book.classList.toggle(`mw-20`);

        book.setAttribute(`data-book-id`, `${i}`);

        const bookTitle = document.createElement(`p`);
        bookTitle.innerHTML = myLibrary[i].info();
        bookTitle.setAttribute(`data-book-title`, `${i}`);
        bookTitle.classList.toggle(`book-title`);
        bookTitle.classList.toggle(`card-text`);

        bookTitle.classList.toggle(`text-center`);
        
        const removeBookBtn = document.createElement(`button`);
        removeBookBtn.classList.toggle(`remove-book-btn`);
        removeBookBtn.classList.toggle(`btn-close`);
        removeBookBtn.classList.toggle(`position-absolute`);
        removeBookBtn.classList.toggle(`top-0`);
        removeBookBtn.classList.toggle(`end-0`);
        removeBookBtn.classList.toggle(`p-2`);

        removeBookBtn.classList.toggle(`btn-outline-light`);
        removeBookBtn.classList.toggle(`btn-sm`);

        const readButton = document.createElement(`button`);
        readButton.classList.toggle(`read-btn`)
        readButton.textContent = `read status`;
        readButton.classList.toggle(`btn`);
        readButton.classList.toggle(`btn-outline-light`);
        readButton.classList.toggle(`btn-md`);

        bookRow.appendChild(book);
        book.appendChild(bookTitle)
        book.appendChild(removeBookBtn);
        book.appendChild(readButton);

        removeBookBtn.addEventListener(`click`, () => {
            myLibrary.splice(i, 1);
            removeAllChildren(bookContainer);
            displayBooks();
        });

        readButton.addEventListener(`click`, () => bookTitle.innerHTML = myLibrary[i].toggleRead());
    };
};




addBookButton.addEventListener(`click`, () => {
    addBookForm.toggleAttribute(`form-container`);

});

formClose.addEventListener(`click`, () => {
    addBookForm.toggleAttribute(`form-container`);

})

formSubmit.addEventListener(`click`, () => {
    const formTitle = addBookForm.elements[1].value;
    const formAuthor = addBookForm.elements[2].value;
    const formPages = addBookForm.elements[3].value;
    const formReadRadio = addBookForm.elements.read;
    addNewBook(formTitle, formAuthor, formPages, formReadRadio.value);
})

displayBooks();