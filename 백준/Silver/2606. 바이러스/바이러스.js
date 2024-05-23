const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  let computerNum = Number(input[0]);
  let connectionNum = Number(input[1]);
  let connections = input.slice(2).map((line) => line.split(" ").map(Number));

  let graph = Array.from({ length: computerNum + 1 }, () => []);
  for (let [a, b] of connections) {
    graph[a].push(b);
    graph[b].push(a);
  }
  let visited = new Array(computerNum + 1).fill(false);

  function recursion(node) {
    visited[node] = true;
    for (let i of graph[node]) {
      if (!visited[i]) {
        recursion(i);
      }
    }
  }
  recursion(1);
  let answer = visited.filter(v => v).length - 1;
  console.log(answer);