function checkString(s) {
  let bAppearOnce = false;

  for (const ch of s) {
    if (bAppearOnce && ch === "a") return false;
    if (ch === "b") bAppearOnce = true;
  }

  return true;
}
