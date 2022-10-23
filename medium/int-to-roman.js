const map = {
  1: "I",
  4: "IV",
  5: "V",

  9: "IX",
  10: "X",

  40: "XL",
  50: "L",

  90: "XC",
  100: "C",

  400: "CD",
  500: "D",

  900: "CM",
  1000: "M",
};

function intToRoman(num) {
  let roman = "";
  let exponent = 0;

  while (num) {
    const digit = num % 10;
    const currentRoman =
      map[digit * 10 ** exponent] || otherRoman(exponent, digit);

    roman = currentRoman + roman;
    num = Math.floor(num / 10);
    exponent += 1;
  }

  return roman;
}

function otherRoman(exponent, digit) {
  // exponent is the power of 10. It starts from 0.

  let _roman = digit > 5 ? map[5 * 10 ** exponent] : "";
  for (let i = 0; i < digit % 5; i++) _roman += map[10 ** exponent];

  return _roman;
}

