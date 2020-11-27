/* eslint-disable no-console */

const fs = require('fs');

fs.writeFile('random.txt', Math.random(), 'utf8', err => {
  if (err) throw err;
  console.log('random number generated to random.txt!');
});
