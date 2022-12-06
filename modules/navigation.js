const showSec = (section) => {
  const secBookList = document.getElementById('list');
  const secBookForm = document.getElementById('add-book');
  const secContact = document.getElementById('contact');
  const successMsg = document.getElementById('success');

  switch (section) {
    case 'list':
      if (secBookList.classList.contains('d-none')) {
        secBookList.classList.remove('d-none');
        secBookForm.classList.add('d-none');
        secContact.classList.add('d-none');
      }
      break;

    case 'form':
      if (secBookForm.classList.contains('d-none')) {
        secBookForm.classList.remove('d-none');
        secBookList.classList.add('d-none');
        secContact.classList.add('d-none');
        successMsg.classList.add('d-none');
      }
      break;

    case 'contact':
      if (secContact.classList.contains('d-none')) {
        secContact.classList.remove('d-none');
        secBookForm.classList.add('d-none');
        secBookList.classList.add('d-none');
      }
      break;

    default: break;
  }
};

export default showSec;