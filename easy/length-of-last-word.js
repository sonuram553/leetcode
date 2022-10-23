const lengthOfLastWord = function (str) {
  const size = str.length;
  let i = size - 1;

  while (str[i] === " " && i >= 0) {
    i -= 1;
  }

  let count = 0;
  while (str[i] !== " " && i >= 0) {
    count += 1;
    i -= 1;
  }

  return count;
};
