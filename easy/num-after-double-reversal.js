function isSameAfterReversals(num) {
  if (num === 0) return true;

  return Boolean(num % 10);
}
