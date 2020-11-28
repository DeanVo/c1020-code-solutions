/* eslint-disable no-console */

const fs = require('fs');
const json = require('./data.json');

const keys = Object.keys(json.notes);
const lastKey = keys[keys.length - 1];

if (process.argv[2] === 'read') {
  console.log(JSON.stringify(json.notes, null, 2));
} else if (process.argv[2] === 'create') {
  json.notes[json.nextId] = process.argv[3];
  if (keys.length === 0) {
    json.nextId = 2;
  } else {
    json.nextId = Number(lastKey) + 2;
  }
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
  if (process.argv[3] === String(lastKey) && keys.length === 2) {
    json.nextId = Number(keys[0]) + 1;
  } else if (process.argv[3] === String(lastKey) && keys.length === 1) {
    json.nextId = 1;
  } else if (process.argv[3] === String(lastKey)) {
    json.nextId = Number(lastKey);
  } else {
    json.nextId = Number(lastKey) + 1;
  }
  fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf8', () => {
    console.log('Note deleted.');
  });
} else {
  console.log('Invalid commands. Please try again');
}

//
