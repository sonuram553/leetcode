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

// Main Solution
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

function fib(n) {
  if (n < 2) return n;
  //return fib(n - 1) + fib(n - 2);
  return memoizedFib(n - 1) + memoizedFib(n - 2);
}

const memoizedFib = memoize(fib);

// Alternate Solutions
const series = [0, 1];
function fibSeries(n) {
  if (series[n] || series[n] === 0) return series[n];
  series[n] = fibSeries(n - 1) + fibSeries(n - 2);
  return series[n];
}

function fibIterative(n) {
  if (n < 2) return n;

  let a = 0;
  let b = 1;
  let c;

  for (let i = 0; i < n - 1; i++) {
    c = b + a;
    a = b;
    b = c;
  }

  return c;
}

module.exports = memoizedFib;
