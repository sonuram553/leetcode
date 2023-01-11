function bestHand(ranks, suits) {
  let sameSuitCount = 1;
  for (let i = 1; i < suits.length; i++) {
    if (suits[i] === suits[i - 1]) sameSuitCount++;
  }

  if (sameSuitCount === 5) return "Flush";

  const ranksMap = {};
  for (const rank of ranks) {
    ranksMap[rank] = (ranksMap[rank] || 0) + 1;
  }

  for (const rank in ranksMap) {
    if (ranksMap[rank] >= 3) return "Three of a Kind";
  }

  for (const rank in ranksMap) {
    if (ranksMap[rank] === 2) return "Pair";
  }

  return "High Card";
}
