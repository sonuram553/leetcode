function matrixReshape(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  const result = [];

  if (m * n !== r * c) return mat;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const k = n * i + j;
      const num = mat[i][j];

      if (k % c === 0) result.push([num]);
      else result[Math.floor(k / c)].push(num);
    }
  }

  return result;
}
