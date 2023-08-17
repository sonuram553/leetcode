function fillCups(amount) {
  let secs = 0;
  while (amount.some((num) => !!num)) {
    amount.sort((a, b) => b - a);
    amount[0] && amount[0]--;
    amount[1] && amount[1]--;
    secs++;
  }
  return secs;
}

export default fillCups;
