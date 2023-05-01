import { bookList } from './form.js';
import { getStoredData, deleteBook } from './storage.js';

/* eslint-disable import/prefer-default-export */
const showBookList = (authorData) => {
  const bookNameRow = document.createElement('tr');
  const bookAuthorRow = document.createElement('tr');
  const deleteRow = document.createElement('tr');
  const newBookName = document.createElement('td');
  const newBookAuthor = document.createElement('td');
  const deleteButton = document.createElement('button');
  newBookName.innerText = authorData.bookName;
  newBookAuthor.innerText = authorData.bookAuthor;
  deleteButton.innerHTML = 'Delete';
  deleteButton.className = 'remove-book';
  bookNameRow.append(newBookName);
  bookAuthorRow.append(newBookAuthor);
  deleteRow.append(newBookName, newBookAuthor, deleteButton);
  deleteRow.classList.add('book-info');
  bookList.append(deleteRow);
  deleteButton.addEventListener('click', () => {
    deleteButton.parentElement.remove();
    deleteBook(authorData.bookNumber);
  });
};

getStoredData().forEach(showBookList);

export { showBookList };
