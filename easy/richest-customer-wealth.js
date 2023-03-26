function maximumWealth(accounts) {
  let maxWealth = 0;

  for (let r = 0; r < accounts.length; r++) {
    let sum = 0;

    for (let c = 0; c < accounts[0].length; c++) {
      sum += accounts[r][c];
    }

    maxWealth = Math.max(maxWealth, sum);
  }

  return maxWealth;
}
