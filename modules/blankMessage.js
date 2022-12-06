const blankMessage = () => {
  const empty = document.getElementById('empty-message');
  const table = document.getElementById('book-list');
  if (table.childNodes.length === 0) {
    if (empty.classList.contains('d-none') === true) {
      empty.classList.remove('d-none');
    }
  } else {
    empty.classList.add('d-none');
  }
};

export default blankMessage;