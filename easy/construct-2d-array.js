function construct2DArray(original, m, n) {
  const size = original.length;
  const result = [];

  if (size !== m * n) return [];

  for (let i = 0; i < size; i++) {
    const num = original[i];
    if (i % n === 0) result.push([num]);
    else result[Math.floor(i / n)].push(num);
  }

  return result;
}
