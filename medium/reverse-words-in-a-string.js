function reverseWords(s) {
  let i = 0;
  const n = s.length;

  // Skip leading spaces
  while (s[i] === " ") i++;

  let word = "";
  let reversed = "";

  while (i < n) {
    if (s[i] === " ") {
      if (reversed.length) word += " ";
      reversed = word + reversed;
      word = "";

      // Skip spaces
      while (s[i] === " ") i++;
    } else {
      word += s[i];
      i++;
    }
  }

  if (word && reversed.length) word += " ";
  return word + reversed;
}
