function solution(n, s) {
    let quotient = Math.floor(s / n);
    let remainder = s % n;
    if(s < n){
        return [-1];
    }
    let answer = new Array(n).fill(quotient);
    
    for(let i = 0; i < remainder; i++){
        answer[i] += 1;
    }
    answer.sort((a, b) => a - b);
    return answer;
}