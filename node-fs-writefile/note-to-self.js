/* eslint-disable no-console */

const fs = require('fs');

fs.writeFile('note.txt', process.argv[2], 'utf8', err => {
  if (err) throw err;
  console.log('note to self saved to note.txt!');
});
