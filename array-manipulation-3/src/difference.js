/* eslint-disable no-unused-vars */

function difference(first, second) {
  const resultArray = [];

  for (let i = 0; i < first.length; i++) {
    if (second.find(el => el === first[i]) === undefined) {
      resultArray.push(first[i]);
    }
  }

  for (let x = 0; x < second.length; x++) {
    if (first.find(el => el === second[x]) === undefined) {
      resultArray.push(second[x]);
    }
  }

  return resultArray;
}
