function solution(n) {
    let answer = [];
    answer[0] = 0;
    answer[1] = 1;
    for(let i = 2; i <= n; i++){
        answer[i] = (answer[i - 2] + answer[i - 1]) % 1234567;
    }
    return answer[n];
}