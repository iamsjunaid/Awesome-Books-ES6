import { bookName, bookAuthor } from './form.js';

const storedData = JSON.parse(localStorage.getItem('storedData')) || [];

export function newAuthorData() {
  const authorData = {
    bookName: bookName.value,
    bookAuthor: bookAuthor.value,
    bookNumber: Math.floor(Math.random() * 1000000),
  };
  storedData.push(authorData);
  localStorage.setItem('storedData', JSON.stringify(storedData));
}

export function deleteBook(bookNumber) {
  const updatedData = storedData.filter((storedData) => storedData.bookNumber !== bookNumber);
  localStorage.setItem('storedData', JSON.stringify(updatedData));
}

export function getStoredData() {
  return storedData;
}
