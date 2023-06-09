const express = require('express');
const fs = require('fs');

const app = express();

const databaseFilePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const students = [];
  const studentsCS = [];
  const studentsSWE = [];

  fs.readFile(databaseFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(400).send('This is the list of our students Cannot load the database');
    }

    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      const student = {};

      for (let j = 0; j < headers.length; j += 1) {
        student[headers[j]] = values[j];
      }

      if (student.firstname && student.lastname && student.age && student.field) {
        students.push(`${student.firstname} ${student.lastname}`);
        if (student.field === 'CS') {
          studentsCS.push(`${student.firstname}`);
        } else if (student.field === 'SWE') {
          studentsSWE.push(`${student.firstname}`);
        }
      }
      return 'Reading file completed'
    }

    const response = [
      'This is the list of our students',
      `Number of students: ${students.length}`,
      `Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`,
      `Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`,
    ].join('\n');

    res.send(response);
  });
});

app.use((req, res) => {
  res.status(404).send('Method is not defined');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
