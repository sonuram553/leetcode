const mySqrtx = function (x) {
  let start = 0;
  let end = x;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mid * mid === x) return mid;

    if (mid * mid > x) end = mid - 1;
    else if ((mid + 1) * (mid + 1) > x) return mid;
    else start = mid + 1;
  }
};

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of nums) {
  console.log(mySqrtx(num));
}
