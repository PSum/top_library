// Define a Book class using ES6 class syntax
class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  
    info() {
      const readStatus = this.read ? "You read the book" : "You didn't read the book";
      return `by ${this.author}, ${this.pages} pages\n${readStatus}`;
    }
  }
  
  // Define a Library class to manage books
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, pages, read) {
      this.books.push(new Book(title, author, pages, read));
    }
  
    deleteBookByTitle(title) {
      this.books = this.books.filter(book => book.title !== title);
    }
  
    displayBooks(container) {
      container.innerHTML = '';
      this.books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
          <h3>${book.title}</h3>
          <p>${book.info()}</p>
          <button class="deleteButton" id="${book.title.replace(/\s/g, '')}">Delete</button>
        `;
        container.appendChild(bookDiv);
      });
    }
  }
  
  // Initialize the library and set up event listeners
  const library = new Library();
  const container = document.querySelector(".bookSpace");
  const form = document.getElementById('addBook');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('bookname').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    
    library.addBook(title, author, pages, read);
    library.displayBooks(container);
    form.reset();
    lookForButton();
  });
  
  function lookForButton() {
    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const buttonId = event.target.id;
        library.deleteBookByTitle(buttonId);
        library.displayBooks(container);
        lookForButton();
      });
    });
  }
  
  // Initialize and display the list of books
  library.displayBooks(container);
  lookForButton();
  