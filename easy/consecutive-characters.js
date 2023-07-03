function maxPower(s) {
  let i = 1;
  let max = 1;
  let currPower = 1;

  while (i < s.length) {
    if (s[i] === s[i - 1]) currPower++;
    else {
      max = Math.max(max, currPower);
      currPower = 1;
    }
    i++;
  }

  return Math.max(max, currPower);
}
