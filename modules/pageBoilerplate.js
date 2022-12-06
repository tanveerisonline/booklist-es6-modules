import { collection, addToPage } from './addEventTopage.js';

const PageBoilerplate = () => {
  collection.bookData = JSON.parse(localStorage.getItem('Library' || '[]'));
  if (collection.bookData === null) {
    collection.bookData = [];
    return;
  }

  collection.bookData.forEach((singleBook) => addToPage(singleBook));
};

export default PageBoilerplate;