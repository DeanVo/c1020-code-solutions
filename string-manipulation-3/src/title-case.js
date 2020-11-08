/* eslint-disable no-unused-vars */

// function titleCase(title) {
//   var stringArray = title.split(' ');
//   var lastIndex = stringArray.length - 1;
//   var newArray = [];

//   for (var i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length <= 3 && stringArray[i] !== stringArray[0] && stringArray[i] !== stringArray[lastIndex]) {
//       newArray.push(stringArray[i].toLowerCase());
//     } else {
//       newArray.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1));
//     }
//   }
//   return newArray.join(' ');
// }

// capitalize the first word if the title and of any subtitle
// capitalize all "major" words in the title, including the second part of hyphenated major words
// capitalize all words of four letters or more

// function titleCase(title) {
//   var stringArray = title.split(' ');
//   var newArray = [];

//   for (var i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length >= 4 && stringArray[i] !== stringArray[i].includes('-') && stringArray[i].toLowerCase() !== 'javascript') {
//       newArray.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1));
//     } else if (stringArray[i].toLowerCase().includes('javascript')) {
//       newArray.push('JavaScript');
//     } else if (stringArray[i].toLowerCase() === 'api') {
//       newArray.push('API');
//     } else if (stringArray[i].toLowerCase() === 'web') {
//       newArray.push('Web');
//     } else if (stringArray[i].includes('-')) {
//       var hyphenArray = stringArray[i].split('-');
//       newArray.push(hyphenArray[0].charAt(0).toUpperCase() + hyphenArray[0].substring(1) + '-' + hyphenArray[1].charAt(0).toUpperCase() + hyphenArray[1].substring(1));
//     } else {
//       newArray.push(stringArray[i].toLowerCase());
//     }
//   }
//   newArray = newArray.join(' ');

//   return newArray;
// }

function titleCase(title) {
  var stringArray = title.split(' ');
  var trashArray = [];
  var newArray = [];
  var lastIndex = stringArray.length - 1;

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes('-')) {
      var hyphenArray = stringArray[i].split('-');
      newArray.push(hyphenArray[0].charAt(0).toUpperCase() + hyphenArray[0].substring(1) + '-' + hyphenArray[1].charAt(0).toUpperCase() + hyphenArray[1].substring(1));
    } else if (stringArray[i].includes(':')) {
      newArray.push(stringArray[i] + ' ' + stringArray[i + 1].charAt(0).toUpperCase() + stringArray[i + 1].substring(1));
    } else if (stringArray[i].length >= 4 && stringArray[i] && stringArray[i].toLowerCase() !== 'javascript') {
      newArray.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1));
    } else if (stringArray[i].toLowerCase().includes('javascript')) {
      newArray.push('JavaScript');
    } else if (stringArray[i].toLowerCase() === 'api') {
      newArray.push('API');
    } else if (stringArray[i].toLowerCase() === 'web') {
      newArray.push('Web');
    } else if (stringArray[i] !== stringArray[0] && stringArray[i] !== stringArray[lastIndex]) {
      newArray.push(stringArray[i].toLowerCase());
    }
  }
  newArray = newArray.join(' ');

  if (newArray.includes('An an')) {
    newArray = newArray.replace('An an', 'An');
  } else if (newArray.includes('The the')) {
    newArray = newArray.replace('The the', 'The');
  }

  if (newArray.includes('javascript:')) {
    newArray = newArray.replace('javascript:', 'JavaScript:');
  } else if (newArray.includes('Javascript:')) {
    newArray = newArray.replace('Javascript:', 'JavaScript:');
  }

  return newArray;
}
