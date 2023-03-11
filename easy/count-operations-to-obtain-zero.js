function countOperations(num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;

  let count = 0;

  function helper(num1, num2) {
    if (num1 % num2 === 0) {
      count += num1 / num2;
      return;
    }

    if (num2 % num1 === 0) {
      count += num2 / num1;
      return;
    }

    if (num1 >= num2) {
      count += Math.floor(num1 / num2);
      num1 %= num2;
    } else {
      count += Math.floor(num2 / num1);
      num2 %= num1;
    }

    helper(num1, num2);
  }

  helper(num1, num2);
  return count;
}
