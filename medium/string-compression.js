/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let size = 0;
  let charsCount = 1;
  const len = chars.length;

  for (let i = 1; i < len; i++) {
    if (chars[i - 1] === chars[i]) {
      charsCount++;
    } else {
      chars[size] = chars[i - 1];
      if (charsCount === 1) {
        size++;
      } else {
        const str = String(charsCount);
        for (let i = 0; i < str.length; i++) {
          chars[size + 1 + i] = str[i];
        }
        size += str.length + 1;
      }
      charsCount = 1;
    }
  }

  chars[size] = chars[len - 1];
  if (charsCount === 1) {
    size++;
  } else {
    const str = String(charsCount);
    for (let i = 0; i < str.length; i++) {
      chars[size + 1 + i] = str[i];
    }
    size += str.length + 1;
  }

  return size;
};
