import { DateTime } from '../node_modules/luxon/src/luxon.js';
import { dateAndTime } from './form.js';

const getCurrentDateTime = () => {
  const now = DateTime.now();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_FULL);
  dateAndTime.textContent = formattedDate;
};

export default getCurrentDateTime;