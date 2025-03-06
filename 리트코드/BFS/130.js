// https://leetcode.com/problems/surrounded-regions/description/?envType=problem-list-v2&envId=breadth-first-search

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const answer = [...board];
  const m = board.length;
  const n = board[0].length;

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== "O") return;
    answer[x][y] = "T";

    for (let [dx, dy] of directions) {
      dfs(x + dx, y + dy);
    }
  };

  for (let i = 0; i < m; i++) {
    if (answer[i][0] === "O") dfs(i, 0);
    if (answer[i][n - 1] === "O") dfs(i, n - 1);
  }
  for (let i = 0; i < n; i++) {
    if (answer[0][i] === "O") dfs(0, i);
    if (answer[m - 1][i] === "O") dfs(m - 1, i);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === "O") answer[i][j] = "X";
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === "T") answer[i][j] = "O";
    }
  }
  return answer;
};
