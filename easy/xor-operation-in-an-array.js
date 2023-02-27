function xorOperation(n, start) {
  let xor = start;

  for (let i = 1; i < n; i++) {
    xor ^= start + 2 * i;
  }

  return xor;
}
