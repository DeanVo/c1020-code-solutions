const pg = require('pg');
const express = require('express');
const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgress://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = req.body.score;

  if (newScore > 100 || newScore < 1) {
    res.status(400).json({ error: 'Score invalid. Please input number from 1-100.' });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const params = [newName, newCourse, newScore];

  db.query(sql, params)
    .then(result => {
      res.status(201).json({
        name: newName,
        course: newCourse,
        score: newScore
      });
    })
    .catch(err => {
      if (!newName || !newCourse || !newScore) {
        res.status(400).json({ error: 'Invalid input. Please make sure you are including the name, course, and score.' });
      } else {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    });

});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);

  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = req.body.score;

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer.' });
    return;
  } else if (!newName || !newCourse || !newScore) {
    res.status(400).json({ error: 'Invalid input. Please make sure you are including name, course, and score.' });
    return;
  }

  const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *
  `;

  const params = [newName, newCourse, newScore, gradeId];

  db.query(sql, params)
    .then(result => {
      const gradeResult = result.rows[0];
      if (!gradeResult) {
        res.status(404).json({ error: `gradeId ${gradeId} does not exist.` });
      } else {
        res.status(200).json({
          name: newName,
          course: newCourse,
          score: newScore
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer.' });
    return;
  }

  const sql = `
    delete from "grades"
      where "gradeId" = $1
    returning *
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const gradeResult = result.rows[0];
      if (!gradeResult) {
        res.status(404).json({ error: `gradeId ${gradeId} does not exist.` });
      } else {
        res.status(204).send();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
