function categorizeBox(length, width, height, mass) {
  let isBulky = false;
  let isHeavy = false;

  if (
    length >= 1e4 ||
    width >= 1e4 ||
    height >= 1e4 ||
    length * width * height >= 1e9
  )
    isBulky = true;

  if (mass >= 100) isHeavy = true;

  if (isBulky && isHeavy) return "Both";
  if (isBulky) return "Bulky";
  if (isHeavy) return "Heavy";
  return "Neither";
}
