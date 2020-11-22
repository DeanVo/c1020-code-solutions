/* eslint-disable no-unused-vars */

function isVowel(character) {
  var result;
  var upperChar = character.toUpperCase();
  if (upperChar === 'A' || upperChar === 'E' || upperChar === 'I' || upperChar === 'O' || upperChar === 'U') {
    result = true;
  } else {
    result = false;
  }
  return result;
}
