/* eslint-disable no-unused-vars */

function initial(array) {
  var newArray = [];
  var lastIndex = array.length - 1;
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
