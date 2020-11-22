/* eslint-disable no-unused-vars */

// function getWords(string) {
//   var words = string.split(' ');
//   if (string === '') {
//     words = string.split('');
//   }
//   return words;
// }

function getWords(string) {
  var newArray = [];
  if (string.length > 0) {
    newArray = string.split(' ');
  }
  return newArray;
}
