/* eslint-disable no-unused-vars */

function lastChars(length, string) {
  var newString = '';
  for (var i = string.length - length; i < string.length; i++) {
    newString += string.charAt(i);
  }
  return newString;
}
