// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Main Solution
function intReverseWithWhileLoop(num) {
  if (num === 0) return 0;

  let absNum = num < 0 ? -num : num;
  let rev = 0;
  while (absNum !== 0) {
    rev = rev * 10 + (absNum % 10);
    absNum = Math.floor(absNum / 10);
  }

  return num < 0 ? -rev : rev;
}

// Alternate Solutions
function intReverseWithJsReverse(num) {
  const rev = num.toString().split("").reverse().join("");

  return parseInt(rev) * Math.sign(num);
}

module.exports = intReverseWithWhileLoop;
