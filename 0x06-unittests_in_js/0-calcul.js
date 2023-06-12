#!/usr/bin/node

/**
 * Create a function named calculateNumber.
 * It should accepts two arguments (number) a and b
 * The function should round a and b and return the sum of it
 */

function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

exports.calculateNumber = calculateNumber;
