function countPrefixes(words, s) {
  let count = 0;
  for (const word of words) if (isSubstringAPrefix(s, word)) count++;
  return count;
}

function isSubstringAPrefix(str, substr) {
  if (substr.length > str.length) return false;

  for (let i = 0; i < substr.length; i++)
    if (substr[i] !== str[i]) return false;

  return true;
}
