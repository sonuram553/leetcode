function truncateSentence(s, k) {
  if (k === 0) return "";

  let i = 0;
  let count = 0;

  while (i < s.length) {
    if (s[i] === " ") {
      count++;
      if (count === k) return s.slice(0, i);
    }

    i++;
  }

  return s;
}
