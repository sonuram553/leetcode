// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Main Solution
function palindromeWithForLoop(str) {
  let isPalindrome = true;
  const len = str.length;
  const upto = Math.floor(len / 2);

  for (let i = 0; i < upto; i++) {
    if (str[i] !== str[len - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

// Alternate Solutions
function palindromeWithJsEvery(str) {
  const len = str.length;
  return str.split("").every((char, i) => char === str[len - 1 - i]);
}

function palindromeWithRecursion(str, index = 0) {
  if (str.length < 2) return true;

  const mid = Math.floor((str.length - 1) / 2);
  if (index > mid) return true;

  if (str[index] === str[str.length - index - 1])
    return palindromeWithRecursion(str, index + 1);
  return false;
}

module.exports = palindromeWithForLoop;