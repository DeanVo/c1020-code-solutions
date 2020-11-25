/* eslint-disable no-console */

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const firstNumber = process.argv[2];
const secondNumber = process.argv[4];
const operator = process.argv[3];

if (operator === 'plus') {
  console.log(`Result: ${add(Number(firstNumber), Number(secondNumber))}`);
} else if (operator === 'minus') {
  console.log(`Result: ${subtract(Number(firstNumber), Number(secondNumber))}`);
} else if (operator === 'times') {
  console.log(`Result: ${multiply(Number(firstNumber), Number(secondNumber))}`);
} else if (operator === 'over') {
  console.log(`Result: ${divide(Number(firstNumber), Number(secondNumber))}`);
}
