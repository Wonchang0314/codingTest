function solution(n, left, right) {
    var answer = [];
   
    for(let i = left; i <= right; i++){
        let j = Math.floor(i / n);
        let k = i % n;
        answer.push(Math.max(j, k) + 1);
    }
    return answer;
}