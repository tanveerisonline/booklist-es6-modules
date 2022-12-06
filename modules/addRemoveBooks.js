export default class Collection {
  constructor() {
    this.bookData = [];
  }

  addBook = (singleBook) => {
    this.bookData.push(singleBook);
    localStorage.setItem('Library', JSON.stringify(this.bookData));
  }

  deleteBook = (bookId) => {
    const bookElement = document.getElementById(bookId);
    bookElement.remove();
    this.bookData = this.bookData.filter((bookObject) => bookObject.bookId !== bookId);
    localStorage.setItem('Library', JSON.stringify(this.bookData));
  }
}