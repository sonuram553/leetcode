/* 
--- Directions
Write a function to calculate the factorial of a number.

--- Exmaples
factorial(0)    // returns 1;
factorial(1)    // returns 1;
factorial(3)    // returns 6;
factorial(5)    // returns 120;
 */

// Iterative Solution
function factorial(num) {
  let total = 1;

  for(let i = num; i > 0; i--) 
    total *= i;
  
  return total;
}

// Recursive Solution
/* function factorial(num) {
  if (num < 2) return 1;

  return num * factorial(num - 1);
} */

module.exports = factorial;
