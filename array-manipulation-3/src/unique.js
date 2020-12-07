/* eslint-disable no-unused-vars */

function unique(array) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (resultArray.indexOf(array[i]) === -1) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}
