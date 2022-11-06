function countEven(num) {
  let digitsSum = 0;
  let temp = num;

  while (temp) {
    digitsSum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  if (digitsSum % 2 === 0) return Math.floor(num / 2);
  return Math.floor((num - 1) / 2);
}
