function average(salary) {
  let min = Number.MAX_VALUE;
  let max = 0;

  for (const num of salary) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return (
    (salary.reduce((acc, num) => num + acc) - min - max) / (salary.length - 2)
  );
}
