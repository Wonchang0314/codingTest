function recursion(index, visited, graph) {
  visited[index] = true;
  for (let node of graph[index]) {
    if (!visited[node]) {
      recursion(node, visited, graph);
    }
  }
}

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
  //let input = data.trim().split("\n");
  let n = Number(input[0].split(" ")[0]);
  let m = Number(input[0].split(" ")[1]);
  const nodes = input.slice(1).map((node) => node.split(" ").map(Number));
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of nodes) {
    graph[a].push(b);
    graph[b].push(a);
  }
  let visited = new Array(n + 1).fill(false);
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      recursion(i, visited, graph);
      answer += 1;
    }
  }
  console.log(answer);