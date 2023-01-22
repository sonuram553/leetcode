function convertToBase7(num) {
  if (num === 0) return "0";

  let value = "";
  const isNegative = num < 0;

  num = Math.abs(num);

  while (num) {
    value = (num % 7) + value;
    num = Math.floor(num / 7);
  }

  return isNegative ? "-" + value : value;
}
