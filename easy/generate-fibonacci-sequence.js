function* fibGenerator() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Recursion
function* fibGenerator(a = 0, b = 1) {
  yield a;

  yield* fibGenerator(b, a + b);
}
