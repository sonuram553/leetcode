function reformatNumber(str) {
  let reformated = "";
  let digitsCount = 0;
  const n = str.length;

  // Trim - or " "
  let start = 0;
  let end = n - 1;
  while (!isNum(str[start])) start++;
  while (!isNum(str[end])) end--;

  // Count number of digits
  for (let i = 0; i < n; i++) {
    const ch = str[i];
    if (isNum(ch)) digitsCount++;
  }

  let index = start;
  while (digitsCount) {
    if (digitsCount < 4) {
      reformat(digitsCount);
      digitsCount = 0;
    } else if (digitsCount === 4) {
      reformat(2);
      reformat(2);
      digitsCount = 0;
    } else {
      reformat(3);
      digitsCount -= 3;
    }
  }

  // Process a block
  function reformat(blockSize) {
    let j = 0;
    while (j < blockSize) {
      const ch = str[index];
      if (isNum(ch)) {
        reformated += ch;
        j++;
      }
      index++;
    }
    if (index !== end + 1) reformated += "-";
  }

  return reformated;
}

function isNum(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}
