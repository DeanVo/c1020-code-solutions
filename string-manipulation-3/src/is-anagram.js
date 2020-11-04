/* eslint-disable no-unused-vars */

function isAnagram(firstString, secondString) {
  firstString = firstString.split('').sort().join('');
  secondString = secondString.split('').sort().join('');

  if (firstString.replaceAll(' ', '') === secondString.replaceAll(' ', '')) {
    return true;
  } else {
    return false;
  }
}
