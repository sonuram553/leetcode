function countDigits(num) {
  let temp = num;
  let count = 0;

  while (temp) {
    const digit = temp % 10;
    if (num % digit === 0) count++;
    temp = Math.floor(temp / 10);
  }

  return count;
}
