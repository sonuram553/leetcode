// https://www.youtube.com/watch?v=cTBiBSnjO3c

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = []; // stores [index, temp]
  const n = temperatures.length;
  const result = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const t = temperatures[i];
    while (stack.length && t > stack[stack.length - 1][1]) {
      const [stackIndex] = stack.pop();
      result[stackIndex] = i - stackIndex;
    }
    stack.push([i, t]);
  }

  return result;
};
