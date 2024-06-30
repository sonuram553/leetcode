// https://www.youtube.com/watch?v=yEFlGWOVH8g

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let i = Number.MAX_SAFE_INTEGER;
  let j = Number.MAX_SAFE_INTEGER;

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] <= i) {
      i = nums[k];
    } else if (nums[k] <= j) {
      j = nums[k];
    } else return true;
  }

  return false;
};
