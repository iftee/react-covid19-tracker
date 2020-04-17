// Convert date to Weekday, Month DD, YYYY format
export const formatDate = (date) => {
  var providedDate = new Date(date);
  var monthInWord = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var weekdayInWord = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdayInWord[providedDate.getDay()] + ', ' + monthInWord[providedDate.getMonth()] + ' ' + providedDate.getDate() + ', ' + providedDate.getFullYear();
}