function closetTarget(words, target, startIndex) {
  const n = words.length;
  let i = startIndex;
  let count = 0;
  let right = -1;

  while (count !== n) {
    if (words[i] === target) {
      right = count;
      break;
    }
    i = (i + 1) % n;
    count++;
  }

  if (right === -1) return -1;

  i = startIndex;
  count = 0;
  let left = right;

  while (count !== n) {
    if (words[i] === target) {
      left = count;
      break;
    }
    i = (i - 1 + n) % n;
    count++;
  }

  return Math.min(left, right);
}
