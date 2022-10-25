function maxCount(row, col, ops) {
  if (ops.length === 0) return row * col;

  let min_r = ops[0][0];
  let min_c = ops[0][1];

  for (const [r, c] of ops) {
    min_r = Math.min(min_r, r);
    min_c = Math.min(min_c, c);
  }

  return min_r * min_c;
}
