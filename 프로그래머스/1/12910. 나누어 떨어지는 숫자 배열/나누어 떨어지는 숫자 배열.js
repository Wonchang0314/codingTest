function solution(arr, divisor) {
    var answer = [];
    arr.forEach(e => {
        if(e % divisor === 0) {
            answer.push(e);
        }
    })
    answer.sort((a, b) => a - b);
    if(answer.length === 0) return [-1];
    return answer;
}