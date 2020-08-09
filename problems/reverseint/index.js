// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  if (num === 0) return 0;

  let temp = num < 0 ? -num : num;
  let rev = 0;
  while (temp !== 0) {
    rev = rev * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return num < 0 ? -rev : rev;
}

module.exports = reverseInt;

/* function reverseInt(num) {
    const rev = num.toString().split("").reverse().join("");

    return parseInt(rev) * Math.sign(num);
} */
