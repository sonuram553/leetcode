function finalString(s) {
  let i = 0;
  const result = [];
  const n = s.length;

  while (i < n) {
    const ch = s[i];

    if (ch === "i") {
      let iCount = 1;

      i++;
      while (s[i] === "i" && i < n) {
        i++;
        iCount++;
      }

      if (iCount & 1) {
        result.reverse();
      }
    } else {
      result.push(ch);
      i++;
    }
  }

  return result.join("");
}
