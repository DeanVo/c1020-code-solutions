/* eslint-disable no-unused-vars */

function intersection(first, second) {
  const resultArray = [];

  for (let i = 0; i < first.length; i++) {
    if (second.find(el => el === first[i])) {
      resultArray.push(first[i]);
    }
  }
  return resultArray;
}
