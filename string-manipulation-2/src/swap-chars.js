/* eslint-disable no-unused-vars */

// function swapChars(firstIndex, secondIndex, string) {
//   var index1 = string[firstIndex];
//   var index2 = string[secondIndex];
//   var newString = '';

//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === index1) {
//       newString += index2;
//     } else if (string[i] === index2) {
//       newString += index1;
//     } else {
//       newString += string[i];
//     }
//   }
//   return newString;
// }

function swapChars(firstIndex, secondIndex, string) {
  var index1 = string[firstIndex];
  var index2 = string[secondIndex];
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += index2;
    } else if (i === secondIndex) {
      newString += index1;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
