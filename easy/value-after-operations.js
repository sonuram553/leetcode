function finalValueAfterOperations(operations) {
  let value = 0;

  for (const op of operations) {
    if (["++X", "X++"].includes(op)) value++;
    else value--;
  }

  return value;
}
