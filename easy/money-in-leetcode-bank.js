function totalMoney(n) {
  if (n < 7) return sumOfN(n);

  let money = 28;

  for (let i = 1; i < Math.floor(n / 7); i++) {
    money += 7 * i + 28;
  }

  const mod = n % 7;

  if (mod) {
    money += mod * Math.floor(n / 7) + sumOfN(mod);
  }

  return money;
}

function sumOfN(n) {
  return (n * (n + 1)) / 2;
}
