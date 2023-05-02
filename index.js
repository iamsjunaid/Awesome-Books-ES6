import {
  form, bookName, bookAuthor,
} from './modules/form.js';
import { newAuthorData } from './modules/storage.js';
import { showBookList } from './modules/bookList.js';

import getCurrentDateTime from './modules/dateTime.js';

// const getCurrentDateTime = () => {
//   // console.log(DateTime.now());
//   const now = DateTime.now();
//   const formattedDate = now.toLocaleString(DateTime.DATETIME_FULL);
//   dateAndTime.textContent = formattedDate;
// };

setInterval(getCurrentDateTime, 1000);

// dateAndTime.textContent = now;

// Listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting
  if (bookName.value !== '' && bookAuthor.value !== '') {
    newAuthorData();
    showBookList({ bookName: bookName.value, bookAuthor: bookAuthor.value });
    form.reset();
  } else {
  // Optional: display a success message
    // eslint-disable-next-line no-alert
    alert('Enter valid values for title and author fields, please.');
  }
});
