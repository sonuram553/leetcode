function tribonacci(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  let a = 0,
    b = 1,
    c = 1,
    x,
    i = 2;

  while (i++ < n) {
    x = a + b + c;
    a = b;
    b = c;
    c = x;
  }

  return x;
}
