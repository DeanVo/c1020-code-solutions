/* eslint-disable no-unused-vars */

function capitalizeWords(string) {
  var array = string.split(' ');
  var newString = '';
  for (var i = 0; i < array.length; i++) {
    newString += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase() + ' ';
  }
  return newString.trim();
}
