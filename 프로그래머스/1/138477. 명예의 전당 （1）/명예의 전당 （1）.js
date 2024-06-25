function solution(k, score) {
    var answer = [];
    let arr = []
    for(let i = 0; i < score.length; i++){
        if(i <= k - 1){
            arr.push(score[i]);
            arr.sort((a, b) => b - a);
            let temp = arr.pop();
            answer.push(temp);
            arr.push(temp);
        }
        else{
            arr.push(score[i]);
            arr.sort((a, b) => b - a);
            let temp = arr.slice(0, k);
            temp.sort((a, b) => b - a);
            answer.push(temp.pop());
        }
    }
    return answer;
}