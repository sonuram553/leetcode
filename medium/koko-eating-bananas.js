// https://www.youtube.com/watch?v=U2SozAs9RzA

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let start = 1;
  let end = Math.max(...piles);
  let result;

  while (start <= end) {
    const mid = (start + end) >>> 1;
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      result = mid;
      end = mid - 1;
    } else start = mid + 1;
  }

  return result;
};
