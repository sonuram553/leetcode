var isPalindrome = function (x) {
  if (x < 0) return false;
  let num = x;
  let reverse = 0;

  while (num) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);
    reverse = reverse * 10 + lastDigit;
  }

  return reverse === x;
};

console.log(isPalindrome());
