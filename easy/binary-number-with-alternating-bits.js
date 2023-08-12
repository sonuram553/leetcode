function hasAlternatingBits(n) {
  let prevBit = null;
  
  while (n) {
    bit = n % 2;
    n = n >> 1;
    if (prevBit === null) prevBit = bit;
    else {
      if (prevBit === bit) return false;
      prevBit = bit;
    }
  }

  return true;
}
