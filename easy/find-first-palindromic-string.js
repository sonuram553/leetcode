function firstPalindrome(words) {
  for (const word of words) if (isPalindrome(word)) return word;

  return "";
}

function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) if (s[start++] !== s[end--]) return false;

  return true;
}
