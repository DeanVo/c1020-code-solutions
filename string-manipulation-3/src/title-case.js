/* eslint-disable no-unused-vars */

// capitalize the first word of the title and of any subtitle

// capitalize all "major" words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of
// hyphenated major words (e.g., Self-Report, not Self-report)

// capitalize all words of four letters or more

// this boils down to using lowercase only for "minor" words of three letters or fewer, namely, for conjunctions
// (words like and, or, nor, and but), articles (a, an, and the), and prepositions (as, at, by, for, in, of, on, per, and to),
// as long as they aren't the first word in a title or subtitle

// special cases
// JavaScript is always JavaScript
// API is a "known" acronym

function titleCase(title) {
  var titleArray = title.split(' ');
  var resultArray = [];

  for (var i = 0; i < titleArray.length; i++) {
    if (isSpecialCase(titleArray[i])) {
      resultArray.push(specialCases(titleArray[i]));
    } else if (minorWords(titleArray[i])) {
      resultArray.push(titleArray[i].toLowerCase());
    } else {
      resultArray.push(capitalizeWords(titleArray[i]));
    }
  }

  for (var x = 0; x < resultArray.length; x++) {
    if (includesColon(resultArray[x])) {
      resultArray[x + 1] = capitalizeWords(resultArray[x + 1]);
    }
  }

  return resultArray.join(' ');
}

// capitalize all "major" words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of
// hyphenated major words (e.g., Self-Report, not Self-report)

// capitalize all words of four letters or more

function capitalizeWords(word) {
  var result = '';
  var firstLetter = word[0].toUpperCase();
  var remainingLetters = word.substring(1).toLowerCase();

  result = firstLetter + remainingLetters;

  if (word.includes('-')) {
    var hyphenIndex;
    hyphenIndex = word.indexOf('-');

    result = firstLetter + word.substring(1, hyphenIndex) + '-' + word[hyphenIndex + 1].toUpperCase() + word.substring(hyphenIndex + 2).toLowerCase();

  }
  return result;
}

function minorWords(word) {
  if (word.length <= 3) {
    return true;
  } else {
    return false;
  }
}

function isSpecialCase(word) {
  if (word.toLowerCase() === 'javascript' || word.toLowerCase() === 'javascript:' || word.toLowerCase() === 'api' || word.toLowerCase() === 'web') {
    return true;
  } else {
    return false;
  }
}

function includesColon(word) {
  if (word.includes(':')) {
    return true;
  } else {
    return false;
  }
}

function specialCases(word) {
  if (word.toLowerCase() === 'api') {
    word = word.toUpperCase();
  } else if (word.toLowerCase() === 'web') {
    word = 'Web';
  } else if (word.toLowerCase() === 'javascript') {
    word = 'JavaScript';
  } else if (word.toLowerCase() === 'javascript:') {
    word = 'JavaScript:';
  }
  return word;
}
