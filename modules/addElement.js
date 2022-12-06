import readInput from './input.js';
import { addToPage, collection } from './addEventTopage.js';

const addElement = () => {
  const singleBook = readInput();
  if (singleBook !== false && singleBook !== null) {
    collection.addBook(singleBook);
    addToPage(singleBook);
  }
};

export default addElement;
