/* eslint-disable no-console */

var width = 5;
var height = 6;
var area = height * width;

console.log('value of area: ', area);
console.log('typeof area: ', typeof area);

var bill = 99.99;
var payment = 350.54;
var change = payment - bill;

console.log('value of change: ', change);
console.log('typeof change: ', typeof change);

var quizzes = 70;
var midterm = 85;
var final = 95;
var grade = (quizzes + midterm + final) / 3;

console.log('value of grade: ', grade);
console.log('typeof grade: ', typeof grade);

var firstName = 'Dean';
var lastName = 'Vo';
var fullName = firstName + ' ' + lastName;

console.log('value of fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

var pH = 2;
var isAcidic = pH < 7;

console.log('value of isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

var headCount = 1337;
var isSparta = headCount === 300;

console.log('value of isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';

console.log('value of motto: ', motto);
console.log('typeof motto: ', typeof motto);
