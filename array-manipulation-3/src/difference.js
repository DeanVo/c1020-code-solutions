/* eslint-disable no-unused-vars */
function difference(first, second) {
  let joinedArray = first.concat(second);

  joinedArray = unique(joinedArray);

  for (let i = 0; i < first.length; i++) {
    for (let y = 0; y < second.length; y++) {
      for (let x = 0; x < joinedArray.length; x++) {
        if (first[i] === joinedArray[x] && second[y] === joinedArray[x]) {
          joinedArray.splice(x, 1);
        }
      }
    }
  }
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
