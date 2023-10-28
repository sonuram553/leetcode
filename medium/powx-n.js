/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;

  let temp = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) return temp * temp;
  else {
    if (n > 0) return x * temp * temp;
    else return (temp * temp) / x;
  }
};
