/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN = -2147483648;
  const MAX = 2147483647;
  let res = 0;

  while (x) {
    const digit = x % 10;
    x = parseInt(x / 10);

    if (res > parseInt(MAX / 10) || (res === parseInt(MAX / 10) && digit > 7)) {
      return 0;
    }

    if (res < parseInt(MIN / 10) || (res === parseInt(MIN / 10) && digit > 8)) {
      return 0;
    }

    res = res * 10 + digit;
  }

  return res;
};
