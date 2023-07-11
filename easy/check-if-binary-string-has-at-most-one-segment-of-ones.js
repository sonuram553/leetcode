function checkOnesSegment(s) {
  let i = 1;
  const n = s.length;

  while (i < n) {
    if (s[i] === "0") {
      while (i < n && s[i] === "0") i++;
      if (i === n) return true;
      return false;
    } else i++;
  }

  return true;
}
