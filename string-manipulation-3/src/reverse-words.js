/* eslint-disable no-unused-vars */

function reverseWords(string) {
  var stringArray = string.split(' ');
  var newArray = [];

  for (var i = 0; i < stringArray.length; i++) {
    newArray.push(stringArray[i].split('').reverse().join(''));
  }
  newArray = newArray.join(' ');
  return newArray;
}
