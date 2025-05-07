/**
 * Longest Palindromic Substring
 * @param {string} s
 * @return {string}
 */

// 가장 길이가 긴 팰린드롬 찾기
// 2중 배열을 만들기 -> dp[i][j] (i부터 j까지의 문자가 팰런드롬인지 아닌지를 나타내기 위해)
// 한글자인 문자열은 모두 팰런드롬이므로 dp[i][i]를 true로 초기화해주기

// start 시작 인덱스, maxLen 끝 인덱스
// 1. 이제 길이가 2인 문자열부터 보기 시작
// 2. i는 전체 문자열 길에서 길이 만큼을 뺀 만큼까지만 돔
// 3. 끝 문자열을 가리키는 j 선언, 이때 j는 시작 인덱스 + 길이 - 1
// 4. 만약 끝 문자열이 같다면, 안쪽 문자열이 팰런드롬인지 아닌지 검사(이것이 dp[i + 1][j - 1])
// 만약 이게 참이라면 자동으로 dp[i][j] 도 참이어야 함으로 참으로 바꿔줌
// 5. 현재 문자열의 길이가 maxLen보다 크면 maxLen 바꿔줌, 시작 인덱스(start)도 현재 문자열의 시작점(i)로 바꿔줌
// 6. 최종적으로 바뀐 start, maxLen로 slice해서 리턴

var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  let start = 0;
  let maxLen = 1;
  for (len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;

      if (s[i] === s[j]) {
        if (len === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;

          if (len > maxLen) {
            maxLen = len;
            start = i;
          }
        }
      }
    }
  }

  return s.slice(start, start + maxLen);
};
