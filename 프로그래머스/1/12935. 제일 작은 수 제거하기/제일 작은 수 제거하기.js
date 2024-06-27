function solution(arr) {
    var answer = [];
    let min = Infinity;
    arr.forEach(num => {
        min = Math.min(num, min);
    })
    arr.forEach(num => {
        if(num !== min) answer.push(num)
    })
    if(answer.length === 0) return [-1];
    return answer;
}