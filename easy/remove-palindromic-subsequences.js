function removePalindromeSub(s) {
  if (isPalindrome(s)) return 1;
  return 2;
}

function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) if (s[start++] !== s[end--]) return false;

  return true;
}
