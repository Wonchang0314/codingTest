function solution(k, m, score) {
    var answer = [];
    let result = 0;
    let len = score.length;
    score.sort((a, b) => a - b);
    for(let i = 0; i < Math.floor(len / m); i++){
        let arr = [];
        for(let j = 0; j < m; j++){
            arr.push(score.pop());
        }
        answer.push(arr);
    }
    for(let i = 0; i < answer.length; i++){
        let least = answer[i][answer[i].length - 1];
        result += (least * m);
    }
    return result;
}