/**
 * Find first occurrence where the digit is less than the next one and remove digit at that index and return immediately.
 * Otherwise remove the last occurrence of the digit.
 **/

function removeDigit(number, digit) {
  let digitIndex = -1;
  const n = number.length;
  const digitsArr = number.split("");

  for (let i = 0; i < n; i++) {
    if (digitsArr[i] === digit) {
      digitIndex = i;
      if (i < n && digitsArr[i + 1] > digit) {
        digitsArr[i] = "";
        return digitsArr.join("");
      }
    }
  }

  if (digitIndex === -1) return number;
  else {
    digitsArr[digitIndex] = "";
    return digitsArr.join("");
  }
}
