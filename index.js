import showSec from './modules/navigation.js';
import blankMessage from './modules/blankMessage.js';
import PageBoilerplate from './modules/pageBoilerplate.js';
import addElement from './modules/addElement.js';
import DateTimeFormat from './modules/dateTime.js';

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  addElement();
  blankMessage();
});

const itemList = document.getElementById('menu-item-list');
const itemForm = document.getElementById('menu-item-form');
const itemContact = document.getElementById('menu-item-contact');
const addBookLink = document.getElementById('add-book-link');

itemList.addEventListener('click', () => {
  showSec('list');
});
itemForm.addEventListener('click', () => {
  showSec('form');
});
addBookLink.addEventListener('click', () => {
  showSec('form');
});
itemContact.addEventListener('click', () => {
  showSec('contact');
});

window.onload = () => {
  PageBoilerplate();
  blankMessage();
  DateTimeFormat();
};
