function calculateTax(brackets, income) {
  let tax = 0;
  const [upper, percent] = brackets[0];

  if (income <= upper) {
    return (income * percent) / 100;
  }

  tax = (upper * percent) / 100;
  income -= upper;

  let i = 1;
  while (true) {
    const [upper, percent] = brackets[i];
    const value = upper - brackets[i - 1][0];

    if (income <= value) {
      tax += (income * percent) / 100;
      return tax;
    }

    tax += (value * percent) / 100;
    income -= value;

    i++;
  }
}
