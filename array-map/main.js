/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = x => {
  return x * 2;
};

const doubled = numbers.map(double);

const priceFormat = number => {
  return `$${number.toFixed(2)}`;
};

const prices = numbers.map(priceFormat);

const toUpper = word => {
  return word.toUpperCase();
};

const upperCased = languages.map(toUpper);

const firstIndex = word => {
  return word[0];
};

const firstLetters = languages.map(firstIndex);

// pushing again. accidentally merged before approved
