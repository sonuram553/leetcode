function isAlienSorted(words, order) {
  const indexMap = {};

  for (let i = 0; i < order.length; i++) {
    indexMap[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!isSorted(words[i], words[i + 1], indexMap)) return false;
  }

  return true;
}

function isSorted(left, right, indexMap) {
  let i = 0;

  while (i < left.length && i < right.length) {
    const leftChar = left[i];
    const rightChar = right[i];

    if (indexMap[leftChar] < indexMap[rightChar]) return true;
    if (indexMap[leftChar] > indexMap[rightChar]) return false;
    
    i++;
  }

  return left.length <= right.length;
}
