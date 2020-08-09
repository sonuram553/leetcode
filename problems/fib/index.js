"use strict";

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Memoization

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

/* const series = [0, 1];
function fib(n) {
  if (series[n] || series[n] === 0) return series[n];

  series[n] = fib(n - 1) + fib(n - 2);
  return series[n];
} */

// Recursion
/* function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
} */

/* function fib(n) {
  if (n === 1 || n === 2) return 1;

  let a = 0,
    b = 1,
    c;

  for (let i = 0; i < n - 1; i++) {
    c = b + a;
    a = b;
    b = c;
  }

  return c;
} */
