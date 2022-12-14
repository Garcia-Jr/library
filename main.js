function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// display / bring up form
const newBookBtn = document.querySelector('#newBook');
newBookBtn.addEventListener('click', () => {
  document.querySelector('.form').style.display = 'block';
});

function newBook() {
  let myLibrary = [];

  let books = myLibrary;

  books.forEach((book) => addBookToCard(book));
}

// add book's info (title,author,pages) to card
function addBookToCard(book) {
  const container = document.querySelector('.container');
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
  <div class='card-book-title'>${book.title}</div>
  <div class='card-book-author'>Author: ${book.author}</div>
  <div class='card-book-pages'>Pages: ${book.pages}</div>
  `;

  container.appendChild(card);
  card.appendChild(bookReadCheckbox());
  card.appendChild(removeBookBtn());
}

// checkbox input
function bookReadCheckbox() {
  const read = document.createElement('div');
  read.setAttribute('class', 'read-checkbox-container');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'read';

  read.appendChild(input);

  const label = document.createElement('label');
  label.innerText = 'Read?';
  read.appendChild(label);

  input.addEventListener('click', (e) => {
    const inputParentEl = input.parentElement.parentElement;
    const currentCard = e.target.parentElement.parentElement;

    if (inputParentEl.classList.contains('card') && input.checked) {
      currentCard.style.backgroundColor = 'green';
    } else {
      currentCard.style.backgroundColor = '';
    }
  });
  return read;
}

// remove book button
function removeBookBtn() {
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'X';
  removeBtn.setAttribute('id', 'remove');

  removeBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  return removeBtn;
}

// add book from form
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;

  const book = new Book(title, author, pages);
  addBookToCard(book);
  clearFields();
  hideForm();
});

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

function hideForm() {
  document.querySelector('.form').style.display = 'none';
}

newBook();
