function createBook (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let isRead = ""
        let returnvalue = []
        if (read == true){
            isRead = "You read the book";
        } else {
            isRead = "You didnt read the book";
        }
        returnvalue.push(`by ${author}, ${pages} pages`);
        returnvalue.push(isRead);
        return returnvalue
    }
}

function addBookToLibrary (title, author, pages, read) {
    let newBook = new createBook(title, author, pages, read);
    myLibrary.push(newBook);
}

function showBooks () {
    let book;
    for (let i in myLibrary){
        let bShow = myLibrary[i];
        book = document.createElement('div');
        book.className = 'book';
        heading = document.createElement('h3');
        text1 = document.createElement('p')
        text2 = document.createElement('p')
        heading.textContent = bShow.title;
        text1.textContent = bShow.info()[0];
        text2.textContent = bShow.info()[1];
        book.appendChild(heading);
        book.appendChild(text1);
        book.appendChild(text2);
        container.appendChild(book);
    }
}

const container = document.querySelector(".bookSpace");
const form = document.getElementById('addBook');
const myLibrary = [];

form.addEventListener('submit', function(event){
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
    addBookToLibrary(title,author,pages,read)
    container.innerHTML = '';
    showBooks();
    form.reset();
})


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Fifty shades of grey", "some dude", 200,true);
showBooks();








