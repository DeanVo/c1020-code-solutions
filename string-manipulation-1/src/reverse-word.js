/* eslint-disable no-unused-vars */

function reverseWord(word) {
  var wordLength = word.length - 1;
  var emptyString = '';
  for (var i = wordLength; i >= 0; i--) {
    emptyString = emptyString.concat(word[i]);
  }
  return emptyString;
}
