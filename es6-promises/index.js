/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise = takeAChance('Dean');

promise.then(success => {
  console.log(success);
});

promise.catch(failure => {
  console.error(failure.message);
});
