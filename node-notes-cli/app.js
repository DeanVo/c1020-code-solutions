/* eslint-disable no-console */

const fs = require('fs');
const json = require('./data.json');

if (process.argv[2] === 'read') {
  for (const key in json.notes) {
    console.log(`${key}: ${json.notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', () => {
    console.log('Note added.');
  });
} else if (process.argv[2] === 'update') {
  json.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', () => {
    console.log('Note updated.');
  });
} else if (process.argv[2] === 'delete') {
  delete json.notes[process.argv[3]];

  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', () => {
    console.log('Note deleted.');
  });
} else {
  console.log('Invalid commands. Please try again');
}

//
