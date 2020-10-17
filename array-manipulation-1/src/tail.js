/* eslint-disable no-unused-vars */

function tail(array) {
  var firstIndex = array[0];
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
