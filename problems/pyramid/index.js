// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursion

function pyramid(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === n + n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const mid = Math.floor((n + n - 1) / 2);

  if (level.length >= mid - row && level.length <= mid + row) {
    level += "#";
  } else {
    level += " ";
  }
  pyramid(n, row, level);
}

module.exports = pyramid;

/* function pyramid(n) {
  const mid = Math.floor((n + n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "",
      start = mid - row,
      end = mid + row;

    for (let col = 0; col < n + n - 1; col++) {
      if (col >= start && col <= end) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
} */
