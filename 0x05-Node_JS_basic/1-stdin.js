#!/usr/bin/node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

try {
  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name.trim()}`); // Trim the name to remove leading/trailing spaces

    rl.close();
    console.log('This important software is now closing');
  });
} catch (error) {
  console.error(error);
  rl.close();
}
