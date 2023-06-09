#!/usr/bin/node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

try {
  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name.trim()}`);

    rl.close();
    console.log('This important software is now closing');
    process.exit(0);
  });
} catch (error) {
  console.error(error);
  rl.close();
  process.exit(1);
}
