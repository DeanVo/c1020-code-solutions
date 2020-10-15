var x = 4;
var y = 10;
var z = 33;
var maximumValue = Math.max(x, y, z);

console.log('maximumValue: ', maximumValue);

var heroes = ['Black Panther', 'Batman', 'Spiderman', 'All Might'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex value: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero value: ', randomHero);

var library = [
  {
    title: 'JavaScript & jQuery',
    author: 'Jon Duckett'
  },
  {
    title: 'HTML & CSS',
    author: 'Jon Duckett'
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijin Haverbeke'
  }
];
var lastBook = library.pop();

console.log('value of lastBook: ', lastBook);

var firstBook = library.shift();

console.log('value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library: ', library);

var fullName = 'Dean Vo';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
