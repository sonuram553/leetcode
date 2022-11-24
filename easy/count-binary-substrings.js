function countBinarySubstrings(s) {
  let i = 1;
  let prev = 1;
  let count = 0;

  while (i < s.length && s[i] === s[i - 1]) {
    prev += 1;
    i++;
  }

  if (i < s.length) {
    let curr = 1;

    for (i++; i < s.length; i++) {
      if (s[i] === s[i - 1]) curr++;
      else {
        count += Math.min(prev, curr);
        prev = curr;
        curr = 1;
      }
    }

    return count + Math.min(prev, curr);
  } else return 0;
}
