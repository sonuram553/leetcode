// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursion 2

function steps(n, row = 1, step = "") {
  if (n + 1 === row) return;

  if (step.length === n) {
    console.log(step);
    return steps(n, row + 1);
  }

  if (step.length < row) {
    step += "#";
  } else {
    step += " ";
  }
  steps(n, row, step);
}

module.exports = steps;

// Recursion 1

/* function steps(n, row = 1) {
  let step = "",
    i = 1;

  for (i = 1; i <= row; i++) {
    step += "#";
  }

  for (i; i <= n; i++) {
    step += " ";
  }
  console.log(step);

  if (n === row) return;
  steps(n, row + 1);
} */

/* function steps(n) {
  let step = "";

  for (let i = 1; i <= n; i++) {
    step += " ";
  }

  let hash;
  for (i = 1; i <= n; i++) {
    hash = (hash && hash + "#") || "#";
    console.log(hash + step.slice(i));
  }
} */

/* function steps(n) {
  let hash;
  for (let row = 1; row <= n; row++) {
    hash = (hash && hash + "#") || "#";
    let spaces = "";
    for (let col = row + 1; col <= n; col++) {
      spaces += " ";
    }

    console.log(hash + spaces);
  }
} */
