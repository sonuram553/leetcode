// X is 1
// Y is 2

function tictactoe(moves) {
  const Board = new Array(9).fill(0);
  const Lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  moves.forEach(([x, y], i) => {
    const index = 3 * x + y; // Convert 2D array in to 1D array
    Board[index] = i & 1 ? 2 : 1;
  });

  for (const line of Lines) {
    const [x, y, z] = [Board[line[0]], Board[line[1]], Board[line[2]]];
    const result = x * y + y * z + x * z;
    if (result === 3) return "A";
    if (result === 12) return "B";
  }

  return moves.length === 9 ? "Draw" : "Pending";
}
