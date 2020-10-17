/* eslint-disable no-unused-vars */

function reverse(array) {
  var newArray = [];
  var lastIndex = array.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
