// 77. Combinations
// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const answer = [];
  const dfs = (arr, start, K) => {
    if (K === 0) {
      answer.push([...arr]);
      return;
    }
    for (let i = start; i <= n; i++) {
      arr.push(i);
      dfs([...arr], i + 1, K - 1);
      arr.pop();
    }
  };
  dfs([], 1, k);

  return answer;
};
