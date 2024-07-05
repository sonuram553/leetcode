// https://www.youtube.com/watch?v=FevSHchkCeo

/**
 * Time complexity O(n)
 * Space complexity O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  let opCount = 0;
  for (const num of nums) {
    if (map[num]) {
      map[num]--;
      if (map[k - num]) {
        opCount++;
        map[k - num]--;
      }
    }
  }

  return opCount;
};

/**
 * Time complexity O(n)
 * Space complexity O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length - 1;
  let opCount = 0;

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === k) {
      opCount++;
      l++;
      r--;
    } else if (sum > k) {
      r--;
    } else l++;
  }

  return opCount;
};
