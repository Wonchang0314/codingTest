let answer = 0;
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
input = input.slice(1).map((item) => item.split(" ").map(Number));

let visited = new Array(n + 1).fill(false);
let graph = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

for (let i = 0; i < m; i++) {
  let [a, b] = input[i];
  graph[a][b] = 1;
  graph[b][a] = 1;
}

function recursion(index) {
  visited[index] = true;
  for (let i = 1; i <= n; i++) {
    if (!visited[i] && graph[index][i] === 1) {
      recursion(i);
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    recursion(i);
    answer += 1;
  }
}

console.log(answer);
