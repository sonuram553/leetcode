// First check if the sum of total gas is greater than equal to sum of total cost.

function canCompleteCircuit(gas, cost) {
  if (sum(gas) < sum(cost)) return -1;

  let gasConsumed = 0;
  let startIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    gasConsumed += gas[i] - cost[i];

    if (gasConsumed < 0) {
      gasConsumed = 0;
      startIndex = i + 1;
    }
  }

  return startIndex;
}

const sum = (arr) => arr.reduce((sum, num) => sum + num);
