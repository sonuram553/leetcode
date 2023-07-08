function modifyString(str) {
  let i = 0;
  const n = str.length;
  const charsArr = str.split("");

  while (i < n) {
    const ch = charsArr[i];

    if (ch === "?") {
      if (i === 0) {
        if (charsArr[i + 1] !== "a") charsArr[i] = "a";
        else charsArr[i] = "b";
      } else if (i === n - 1) {
        if (charsArr[i - 1] !== "a") charsArr[i] = "a";
        else charsArr[i] = "b";
      } else {
        while (i < n && charsArr[i] === "?") {
          const code = charsArr[i - 1].charCodeAt(0);
          charsArr[i] = String.fromCharCode(((code - 97 + 1) % 26) + 97);
          i++;
        }
        i--;
        if (i < n - 1 && charsArr[i] === charsArr[i + 1]) {
          const code = charsArr[i].charCodeAt(0);
          charsArr[i] = String.fromCharCode(((code - 97 + 1) % 26) + 97);
        }
      }
    }

    i++;
  }

  return charsArr.join("");
}
