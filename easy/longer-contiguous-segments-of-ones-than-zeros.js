function checkZeroOnes(s) {
  let i = 1;
  let count = 1;
  let zeroCount = s[0] === "0" ? 1 : 0;
  let oneCount = s[0] === "1" ? 1 : 0;

  while (i < s.length) {
    if (s[i] !== s[i - 1]) {
      if (s[i - 1] === "0") zeroCount = Math.max(zeroCount, count);
      else oneCount = Math.max(oneCount, count);
      count = 1;
    } else count++;

    i++;
  }

  if (s[i - 1] === "0") zeroCount = Math.max(zeroCount, count);
  else oneCount = Math.max(oneCount, count);

  return oneCount > zeroCount;
}
