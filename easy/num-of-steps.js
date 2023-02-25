function numberOfSteps(num) {
  let count = 0;

  while (num) {
    if (num & 1) num--;
    else num /= 2;
    count++;
  }

  return count;
}
