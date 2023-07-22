function distMoney(money, children) {
  if (money < children) return -1;

  let numOfEightDollars = Math.floor(money / 8);
  money = money % 8;

  if (money === 0) {
    if (children === numOfEightDollars) return children;
    if (children > numOfEightDollars)
      return numOfEightDollars - Math.ceil((children - numOfEightDollars) / 7);
    return children - 1;
  } else {
    if (children === numOfEightDollars) return children - 1;
    if (children > numOfEightDollars) {
      let leftChildren = children - numOfEightDollars;
      if (leftChildren <= money) {
        if (leftChildren === 1 && money === 4) return numOfEightDollars - 1;
        return numOfEightDollars;
      }
      leftChildren -= money;
      return numOfEightDollars - Math.ceil(leftChildren / 7);
    }
    return children - 1;
  }
}
