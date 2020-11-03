/* eslint-disable no-unused-vars */

function capitalizeWord(word) {
  var capFirstLetter = word.charAt(0).toUpperCase();

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return capFirstLetter + word.slice(1).toLowerCase();
}
