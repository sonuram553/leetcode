/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  let res = "";
  let resLen = 0;

  for (let i = 0; i < n; i++) {
    let left = i;
    let right = i;

    // Check for odd groups
    while (left >= 0 && right < n && s[left] === s[right]) {
      if (right - left + 1 > resLen) {
        res = s.slice(left, right + 1);
        resLen = right - left + 1;
      }
      left--;
      right++;
    }

    // Check for even groups
    left = i;
    right = i + 1;
    while (left >= 0 && right < n && s[left] === s[right]) {
      if (right - left + 1 > resLen) {
        res = s.slice(left, right + 1);
        resLen = right - left + 1;
      }
      left--;
      right++;
    }
  }

  return res;
};
