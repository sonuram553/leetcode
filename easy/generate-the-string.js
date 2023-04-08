function generateTheString(n) {
  return n & 1 ? "a".repeat(n) : "a".repeat(n - 1) + "b";
}
