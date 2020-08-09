// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

/* function vowels(str) {
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
} */

/* const Vowels = ["a", "e", "i", "o", "u"];

function vowels(str) {
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    for (let vowel of Vowels) {
      if (char === vowel) {
        vowelCount++;
        break;
      }
    }
  }

  return vowelCount;
} */
