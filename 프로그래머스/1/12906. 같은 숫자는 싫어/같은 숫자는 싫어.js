function solution(arr) {
    var answer = [];
    answer.push(arr[0]);
    arr.forEach((element) => {
        if(answer[answer.length-1] !== element){
            answer.push(element);
        }
    })
    return answer;
}