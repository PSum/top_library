// Define a constructor function 'createBook' to create book objects
function createBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Add a method 'info' to the book object
    this.info = function () {
        let isRead = "";
        let returnvalue = [];

        // Check if the book is read or not
        if (read == true) {
            isRead = "You read the book";
        } else {
            isRead = "You didn't read the book";
        }

        returnvalue.push(`by ${author}, ${pages} pages`);
        returnvalue.push(isRead);
        return returnvalue;
    }
}

// Define a function to add a book to the library array
function addBookToLibrary(title, author, pages, read) {
    let newBook = new createBook(title, author, pages, read);
    myLibrary.push(newBook);
}

// Define a function to display books in the HTML container
function showBooks() {
    let book;
    for (let i in myLibrary) {
        let bShow = myLibrary[i];
        book = document.createElement('div');
        book.className = 'book';
        heading = document.createElement('h3');
        text1 = document.createElement('p');
        text2 = document.createElement('p');
        heading.textContent = bShow.title;
        text1.textContent = bShow.info()[0];
        text2.textContent = bShow.info()[1];
        const deleteButton = document.createElement("button");
        deleteButton.className += 'deleteButton';
        deleteButton.setAttribute('id', bShow.title.replace(/\s/g, ''));
        book.setAttribute('id', bShow.title.replace(/\s/g, ''));
        deleteButton.textContent = "Delete";
        book.appendChild(heading);
        book.appendChild(text1);
        book.appendChild(text2);
        book.appendChild(deleteButton);
        container.appendChild(book);
    }
}

// Define a function to delete a book from the library array
function deleteFromLibrary(bookTitle) {
    newmyLibrary = myLibrary.filter((book) => book.title.replace(/\s/g, '') !== bookTitle);
    myLibrary = newmyLibrary;
}

// Define a function to set up event listeners for delete buttons
function lookForButton() {
    deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // Handle the click event for each delete button
            // Access the clicked button using 'event.target'
            const clickedButton = event.target;
            const buttonId = clickedButton.id;
            const deleteElement = document.querySelector(`#${buttonId}`);
            deleteElement.remove();
            deleteFromLibrary(`${buttonId}`);
            // Perform actions specific to the clicked button here
        });
    });
}

// Get a reference to the HTML container for books
const container = document.querySelector(".bookSpace");
const form = document.getElementById('addBook');
let myLibrary = []; // Initialize an empty library array

// Add a submit event listener to the form for adding books
form.addEventListener('submit', function (event) {
    event.preventDefault();
    title = document.getElementById('bookname').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    checkbox = document.getElementById('read');
    let read;
    if (checkbox.checked) {
        read = true;
    } else {
        read = false;
    }
    addBookToLibrary(title, author, pages, read);
    container.innerHTML = ''; // Clear the container
    showBooks(); // Display the updated list of books
    form.reset(); // Reset the form
    lookForButton(); // Set up event listeners for delete buttons
});

// Initialize and display the list of books
showBooks();
lookForButton();
