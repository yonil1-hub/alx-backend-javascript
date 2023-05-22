#!/usr/bin/node
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const rows = data.trim().split('\n').filter((row) => row).map((row) => row.split(','));

    const totalStudents = rows.length;

    const fields = rows.reduce((acc, [name, , , field]) => {
      const { count, list } = acc[field] || { count: 0, list: [] };
      return {
        ...acc,
        [field]: {
          count: count + 1,
          list: [...list, name],
        },
      };
    }, {});

    console.log(`Number of students: ${totalStudents}`);
    Object.entries(fields).forEach(([field, { count, list }]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
