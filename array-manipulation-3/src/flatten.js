/* eslint-disable no-unused-vars */

function flatten(array) {
  var resultArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      resultArray.push(array[i]);
    }

    for (var x = 0; x < array[i].length; x++) {
      if (Array.isArray(array[i])) {
        resultArray.push(array[i][x]);
      }
    }
  }
  return resultArray;
}
