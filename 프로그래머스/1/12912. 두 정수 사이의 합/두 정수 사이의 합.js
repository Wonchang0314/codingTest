function solution(a, b) {
    var answer = 0;
    const A = Math.min(a, b);
    const B = Math.max(a, b);
    for(let i = A; i <= B; i++) {
        answer += i;
    }
    return answer;
}