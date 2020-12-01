const express = require('express');

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

const array = [
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
  res.send(array);
});
