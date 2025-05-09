// 문제
// 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

// 입력
// 첫째 줄에 1보다 크거나 같고, 106보다 작거나 같은 정수 N이 주어진다.

/** 입력값이 아주 클 경우에 재귀문은 거의 스택 초과 에러가 뜬다고 보면 됨? */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

const dp = Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
}

console.log(dp[num]);
