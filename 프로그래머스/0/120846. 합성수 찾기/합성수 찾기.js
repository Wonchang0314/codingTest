const check = (num, n) => {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(num % i === 0) count += 1;
        if(count >= 3) return true;
    }
    return false;
}
function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        if(check(i, n)) answer += 1;
    }
    return answer;
}