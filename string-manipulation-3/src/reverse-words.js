/* eslint-disable no-unused-vars */

function reverseWords(string) {
  var stringArray = string.split(' ');
  var reverseWord = '';
  var result;

  for (var i = 0; i < stringArray.length; i++) {
    reverseWord = string[i].split('').reverse();
    result += reverseWord;
  }
  return result;
}
