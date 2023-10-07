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

function addBookToLibrary () {

}


const container = document.querySelector(".bookSpace");




// book1 = new createBook("The Hobbit", "J.R.R. Tolkien", 295, false);

