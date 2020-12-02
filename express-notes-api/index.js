const express = require('express');
const fs = require('fs');
const data = require('./data.json');

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const key in data.notes) {
    array.push(data.notes[key]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (data.notes[id]) {
    res.status(200).json(data.notes[id]);
  }

});

app.post('/api/notes', (req, res) => {
  const newContent = req.body.content;

  if (!newContent) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;

    const jsonString = JSON.stringify(data, null, 2);

    fs.writeFile('derp/data.json', jsonString, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
