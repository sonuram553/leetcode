function isWinner(player1, player2) {
  const score1 = calculateScore(player1);
  const score2 = calculateScore(player2);

  if (score1 > score2) return 1;
  if (score2 > score1) return 2;
  return 0;
}

function calculateScore(player) {
  return player.reduce((sum, value, i, arr) => {
    if ((i > 0 && arr[i - 1] === 10) || (i > 1 && arr[i - 2] === 10))
      return sum + 2 * value;

    return sum + value;
  });
}
