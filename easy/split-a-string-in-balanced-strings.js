function balancedStringSplit(str) {
  let lCount = 0;
  let rCount = 0;
  let substringsCount = 0;

  for (const ch of str) {
    if (ch === "L") lCount++;
    else rCount++;

    if (lCount === rCount) {
      substringsCount++;
      lCount = rCount = 0;
    }
  }

  return substringsCount;
}
