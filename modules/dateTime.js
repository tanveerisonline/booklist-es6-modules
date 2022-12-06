import { DateTime } from './luxon.js';

const DateTimeFormat = () => {
  const currentTime = DateTime.now().toFormat('DD tt z (ZZZZ)');
  document.getElementById('date').innerHTML = `${currentTime}`;
};

export default DateTimeFormat;
