/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const n = heights.length;
  const m = heights[0].length;
  const pacific = new Set();
  const atlantic = new Set();
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (queue, visited) => {
    while (queue.length) {
      const [r, c] = queue.shift();
      visited.add(`${r},${c}`);

      for (let [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        const next = `${nr},${nc}`;

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < n &&
          nc < m &&
          !visited.has(next) &&
          heights[nr][nc] >= heights[r][c]
        ) {
          queue.push([nr, nc]);
          visited.add(next);
        }
      }
    }
  };

  const pQ = [];
  const aQ = [];

  for (let i = 0; i < n; i++) {
    pQ.push([i, 0]);
    aQ.push([i, m - 1]);
  }

  for (let i = 0; i < m; i++) {
    pQ.push([0, i]);
    aQ.push([n - 1, i]);
  }

  bfs(pQ, pacific);
  bfs(aQ, atlantic);

  const answer = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      const current = `${r},${c}`;
      if (pacific.has(current) && atlantic.has(current)) {
        answer.push([r, c]);
      }
    }
  }

  return answer;
};
