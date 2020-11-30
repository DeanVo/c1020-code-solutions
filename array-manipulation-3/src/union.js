/* eslint-disable no-unused-vars */

function union(first, second) {
  let joinedArray = first.concat(second);
  joinedArray = unique(joinedArray);
  return joinedArray;
}

function unique(array) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (resultArray.indexOf(array[i]) === -1) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}
