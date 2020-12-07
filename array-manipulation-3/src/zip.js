/* eslint-disable no-unused-vars */

function zip(first, second) {
  const resultArray = [];

  for (let i = 0; i < first.length && i < second.length; i++) {
    const newArray = [];
    newArray.push(first[i]);
    newArray.push(second[i]);
    resultArray.push(newArray);
  }
  return resultArray;
}
