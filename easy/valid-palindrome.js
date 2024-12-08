/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (isAlphaNumeric(s[l]) && isAlphaNumeric(s[r])) {
      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
    }

    if (!isAlphaNumeric(s[l])) l++;
    if (!isAlphaNumeric(s[r])) r--;
  }

  return true;
};

function isAlphaNumeric(ch) {
  const code = ch.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57)
  );
}
