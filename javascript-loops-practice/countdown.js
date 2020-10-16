/* exported countdown */

function countdown(number) {
  var cdArray = [];
  while (number >= 0) {
    cdArray.push(number);
    number--;
  }
  return cdArray;
}
