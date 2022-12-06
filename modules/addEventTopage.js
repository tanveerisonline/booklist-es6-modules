import emptyMessage from './blankMessage.js';
import Collection from './addRemoveBooks.js';

export const collection = new Collection();

export const addToPage = (bookObject) => {
  const bookList = document.getElementById('book-list');
  const singleBook = document.createElement('tr');
  singleBook.classList.add('single-book');
  singleBook.setAttribute('id', bookObject.bookId);
  singleBook.innerHTML = `<td>${bookObject.title}</td>
    <td>${bookObject.author}</td>`;
  const btnCell = document.createElement('td');
  btnCell.classList.add('btn-cell');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', () => {
    collection.deleteBook(bookObject.bookId);
    emptyMessage();
  });

  singleBook.appendChild(btnCell);
  btnCell.appendChild(deleteBtn);
  bookList.appendChild(singleBook);
};