const express = require('express');

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

const classes = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Peepo',
    course: 'BTTV',
    grade: 9002
  }
];

app.get('/api/grades', (req, res) => {
  res.send(classes);
});

app.delete('/api/grades/:id', (req, res) => {
  res.sendStatus(204);

  const id = parseInt(req.params.id);
  for (let i = 0; i < classes.length; i++) {
    if (id === classes[i].id) {
      classes.splice(i, 1);
    }
  }
});
