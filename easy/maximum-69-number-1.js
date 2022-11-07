// Time Complexity O(L)
// Space Complexity O(L)
// L is the length of the number

function maximum69Number(num) {
  const digits = String(num).split("");

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      break;
    }
  }

  return Number(digits.join(""));
}
