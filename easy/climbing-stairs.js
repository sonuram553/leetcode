const factorial = function () {
  const cache = [1, 1];

  const main = function (n) {
    if (cache[n]) return cache[n];
    cache[n] = n * main(n - 1);
    return cache[n];
  };

  return main;
};

const climbStairs = function (n) {
  const twos = Math.floor(n / 2);
  const fact = factorial();
  let result = 0;

  for (let i = 0; i <= twos; i++) {
    const ones = n - 2 * i;
    result += fact(ones + i) / (fact(ones) * fact(i));
  }

  return result;
};
