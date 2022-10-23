// Runtime Complexity O(n)
// Space Complexity O(n)
function majorityElement(nums) {
  const map = {};

  for (const num of nums) {
    map[num] = (map[num] && map[num] + 1) || 1;
  }

  for (const key in map) {
    if (map[key] > nums.length / 2) return key;
  }
}

// Using Moore's Voting Algorithm
// Runtime Complexity O(n)
// Space Complexity O(1)
function majorityElement1(nums) {
  function findCandidate(arr) {
    let count = 1;
    let majIndex = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[majIndex]) count += 1;
      else count -= 1;

      if (count === 0) {
        majIndex = i;
        count = 1;
      }
    }

    return arr[majIndex];
  }

  let count = 0;
  const candidate = findCandidate(nums);

  for (const num of nums) {
    if (candidate === num) {
      count += 1;
      if (count > nums.length / 2) return candidate;
    }
  }
}
