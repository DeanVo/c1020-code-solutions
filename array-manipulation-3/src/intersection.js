/* eslint-disable no-unused-vars */

function intersection(first, second) {
  const joinedArray = first.concat(second);
  let resultArray = [];

  for (let i = 0; i < first.length; i++) {
    for (let x = 0; x < second.length; x++) {
      for (let y = 0; y < joinedArray.length; y++) {
        if (first[i] === joinedArray[y] && second[x] === joinedArray[y]) {
          resultArray.push(first[i]);
          resultArray = unique(resultArray);
        }
      }
    }
  }
  return resultArray;
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
