import BookInfo from './bookAuthorInfo.js';
import showSec from './navigation.js';

const Input = () => {
  const title = document.getElementById('book-title');
  const author = document.getElementById('book-author');
  const errorMsg = document.getElementById('error');
  const successMsg = document.getElementById('success');

  if (title.value === '' && author.value === '') {
    errorMsg.innerHTML = '* All fields are required';
    return false;
  } if (title.value === '') {
    errorMsg.innerHTML = '* Title Empty';
    return false;
  } if (author.value === '') {
    errorMsg.innerHTML = '* Author Empty';
    return false;
  }
  const singleBookInput = new BookInfo(title.value, author.value);
  errorMsg.innerHTML = '';
  successMsg.innerHTML = 'You added a book! See in the <strong><a id="list-link">List</a></strong>';
  successMsg.classList.remove('d-none');
  const listLink = document.getElementById('list-link');
  listLink.addEventListener('click', () => {
    showSec('list');
  });

  title.value = '';
  author.value = '';
  return singleBookInput;
};

export default Input;