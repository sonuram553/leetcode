// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let isPalindrome = true;
  const len = str.length;
  const upto = Math.floor(len / 2);

  for (let i = 0; i < upto; i++) {
    if (str[i] !== str[len - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

module.exports = palindrome;

/* function palindrome(str) {
  const len = str.length;
  return str.split("").every((char, i) => char === str[len - 1 - i]);
} */
