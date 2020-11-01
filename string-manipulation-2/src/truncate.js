/* eslint-disable no-unused-vars */

function truncate(length, string) {
  var stringLength = string.length;
  var newString = '';

  for (var i = 0; i < length; i++) {
    newString = newString + string.charAt(i);
  }
  return newString + '...';
}
