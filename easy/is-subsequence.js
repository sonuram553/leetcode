function isSubsequence(source, target) {
  if (source === "") return true;
  if (source && target === "") return false;

  let i = 0;
  let j = 0;

  while (true) {
    if (source[i] === target[j]) {
      i++;
      j++;
    } else j++;

    if (i === source.length) return true;
    if (j === target.length) return false;
  }
}
