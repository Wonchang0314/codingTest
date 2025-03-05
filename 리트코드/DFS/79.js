/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const checked = Array.from({ length: board.length }, () =>
    new Array(board[0].length).fill(false)
  );
  const m = board.length;
  const n = board[0].length;

  const dfs = (x, y, idx) => {
    if (idx === word.length) return true;
    if (x < 0 || x >= m || y < 0 || y >= n) return false;
    if (checked[x][y] || board[x][y] !== word[idx]) return false;

    checked[x][y] = true;

    for (let [dx, dy] of directions) {
      if (dfs(x + dx, y + dy, idx + 1)) return true;
    }
    checked[x][y] = false;
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) return true;
    }
  }
  return false;
};
