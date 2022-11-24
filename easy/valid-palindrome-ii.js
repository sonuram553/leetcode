function validPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
  }

  return true;
}

function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
}
