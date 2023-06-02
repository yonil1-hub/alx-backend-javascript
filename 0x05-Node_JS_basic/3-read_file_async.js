const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const students = lines.filter((line) => line.trim() !== '');

    const fieldCounts = {};
    const fieldLists = {};

    students.forEach((student) => {
      const [firstName, , field] = student.split(',');

      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        fieldCounts[field] += 1;
        fieldLists[field].push(firstName);
      } else {
        fieldCounts[field] = 1;
        fieldLists[field] = [firstName];
      }
    });

    Object.entries(fieldCounts).forEach(([field, count]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${fieldLists[field].join(', ')}`);
    });

    console.log(`Number of students: ${students.length}`);

    resolve();
  });
});

module.exports = countStudents;
