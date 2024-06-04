function solution(n) {
    let answer = 0;
    if(n === 1 || n === 2){
        return n;
    }
    let a = 1;
    let b = 2;
    let c;
    for(let i = 3; i <= n; i++){
        c = (a + b) % 1000000007;
        a = b;
        b = c;
    }
    answer = c;
    return answer;
}