function isIsomorphic(leftStr, rightStr) {
  let map = {};

  for (let i = 0; i < leftStr.length; i++) {
    const leftCh = leftStr[i];
    if (map[leftCh] && map[leftCh] !== rightStr[i]) return false;

    map[leftCh] = rightStr[i];
  }

  map = {};

  // Do the similar check with the rightStr
  for (let i = 0; i < rightStr.length; i++) {
    const rightCh = rightStr[i];
    if (map[rightCh] && map[rightCh] !== leftStr[i]) return false;

    map[rightCh] = leftStr[i];
  }

  return true;
}
