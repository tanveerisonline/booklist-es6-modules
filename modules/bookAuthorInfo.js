import generateId from './generateId.js';

export default class BookInfo {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookId = generateId(8);
  }
}