#!/usr/bin/node
const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(dataPath, 'utf-8')
    .trim()
    .split('\n');

  const studentGroups = {};

  fileLines.forEach((line) => {
    const [firstname, lastname, age, field] = line.split(',');
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    studentGroups[field].push({ firstname, lastname, age });
  });

  const totalStudents = Object.values(studentGroups)
    .reduce((total, group) => total + group.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  Object.entries(studentGroups).forEach(([field, group]) => {
    const studentNames = group.map(({ firstname }) => firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  });
};

module.exports = countStudents;
