/* eslint-disable no-unused-vars */

function getKeys(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(property);
  }
  return newArray;
}
