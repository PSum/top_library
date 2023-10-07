function createBook (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let isRead = ""
        if (read == true){
            isRead = "already read";
        } else {
            isRead = "not read";
        }
        return (`${title} by ${author}, ${pages} pages, ${isRead}`);
    }
}

function addBookToLibrary (title, author, pages, read) {
    let newBook = new createBook(title, author, pages, read);
    myLibrary.push(newBook);
}

// let book = document.createElement('div');
// book.className = 'book';


// container.appendChild(book);

const container = document.querySelector(".bookSpace");
const myLibrary = [];



addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("fifty shades", "some dude", 200,true);


