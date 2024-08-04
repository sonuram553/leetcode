/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = Math.pow(10, 9) + 7;
  const dp = Array.from({ length: n + 1 }, () => Array(4).fill(null));
  function tilings(i = 0, t1 = true, t2 = true) {
    if (i === n) return 1;

    const state = makeState(t1, t2);
    if (dp[i][state] !== null) return dp[i][state];

    let count = 0;
    let t3 = i + 1 < n;
    let t4 = i + 1 < n;

    if (t1 && t2 && t3) count += tilings(i + 1, false, true);
    if (t1 && t2 && t4) count += tilings(i + 1, true, false);
    if (t1 && !t2 && t3 && t4) count += tilings(i + 1, false, false);
    if (!t1 && t2 && t3 && t4) count += tilings(i + 1, false, false);
    if (t1 && t2) count += tilings(i + 1, true, true);
    if (t1 && t2 && t3 && t4) count += tilings(i + 1, false, false);
    if (t1 && !t2 && t3) count += tilings(i + 1, false, true);
    if (!t1 && t2 && t4) count += tilings(i + 1, true, false);
    if (!t1 && !t2) count += tilings(i + 1, true, true);

    dp[i][state] = count % MOD;
    return dp[i][state];
  }

  return tilings();
};

function makeState(t1, t2) {
  let state = 0;
  if (t1) state |= 1;
  if (t2) state |= 2;
  return state;
}
