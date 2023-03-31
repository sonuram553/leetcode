function cellsInRange(s) {
  const result = [];
  const [left, right] = s.split(":");
  const leftCol = left[0].charCodeAt(0);
  const rightCol = right[0].charCodeAt(0);

  for (let i = leftCol; i <= rightCol; i++) {
    const ch = String.fromCharCode(i);

    for (let j = Number(left[1]); j <= Number(right[1]); j++) {
      result.push(ch + j);
    }
  }

  return result;
}
