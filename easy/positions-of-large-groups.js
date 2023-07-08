function largeGroupPositions(str) {
  let i = 1;
  let start = 0;
  let count = 1;
  const result = [];

  while (i < str.length) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count >= 3) result.push([start, start + count - 1]);
      start = i;
      count = 1;
    }

    i++;
  }

  if (count >= 3) result.push([start, start + count - 1]);
  return result;
}
