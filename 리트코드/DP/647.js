/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let answer = 0;
  const m = s.length;
  const dp = Array.from({ length: m }, () => new Array(m).fill(false));

  // 길이가 한 글자인 문자는 모두 팰린드롬
  for (let i = 0; i < m; i++) {
    dp[i][i] = true;
  }

  for (let len = 2; len <= m; len++) {
    for (let i = 0; i < m; i++) {
      let j = i + len - 1;

      if (s[i] === s[j]) {
        if (len == 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;
        }
      }
    }
  }

  answer = dp.reduce((acc, row) => acc + row.filter(Boolean).length, 0);
  return answer;
};
