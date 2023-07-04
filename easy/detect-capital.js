function detectCapitalUse(word) {
  let capitalCount = 0;

  for (const ch of word) {
    if (isUpperCase(ch)) capitalCount++;
  }

  if (capitalCount === 0 || capitalCount === word.length) return true;
  return capitalCount === 1 && isUpperCase(word[0]);
}

function isUpperCase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 65 && code <= 90;
}
