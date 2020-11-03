/* eslint-disable no-unused-vars */

// function isPalindromic(string) {
//   var reversedString = '';
//   var result;

//   for (var i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }

//   if (string === reversedString) {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }

function isPalindromic(string) {
  var reversedString = '';
  var result;

  for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  if (string.replace(' ', '') === reversedString.replace(' ', '')) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
