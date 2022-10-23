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

// Main Solution
function steps(n) {
  for (let row = 0; row < n; row++) {
    let step = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) step += "#";
      else step += " ";
    }

    console.log(step);
  }
}

// Alternate Solutions
function stepsWithStringsSlice(n) {
  let step = "";

  for (let i = 0; i < n; i++) {
    step += " ";
  }

  let hash;
  for (i = 1; i <= n; i++) {
    hash = (hash && hash + "#") || "#";
    console.log(hash + step.slice(i));
  }
}

function stepsWithRowAndCol(n) {
  let hash;

  for (let row = 0; row < n; row++) {
    hash = (hash && hash + "#") || "#";

    let spaces = "";

    for (let col = row + 1; col < n; col++) {
      spaces += " ";
    }

    console.log(hash + spaces);
  }
}

function stepsWithRecursion1(n, row = 0) {
  if (row === n) return;

  let step = "";
  let i = 0;

  for (; i <= row; i++) {
    step += "#";
  }

  for (i; i < n; i++) {
    step += " ";
  }

  console.log(step);

  stepsWithRecursion1(n, row + 1);
}

function stepsWithRecursion2(n, row = 0, step = "") {
  if (row === n) return;

  if (step.length === n) {
    console.log(step);
    return stepsWithRecursion2(n, row + 1);
  }

  if (step.length <= row) {
    step += "#";
  } else {
    step += " ";
  }

  stepsWithRecursion2(n, row, step);
}

module.exports = steps;
