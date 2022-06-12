function addDigits(num) {
  let sum;

  while (true) {
    sum = 0;

    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    if (sum < 10) return sum;
    num = sum;
  }
}

// Digital Root
function addDigits(num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
}

addDigits(38);
