function solution(x, n) {
    var answer = [];
    let num = 0;
    while(n > 0){
        n -= 1;
        num += x;
        answer.push(num);
    }
    return answer;
}