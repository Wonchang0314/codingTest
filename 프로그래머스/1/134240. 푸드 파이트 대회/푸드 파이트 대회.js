function solution(food) {
    let answer = "";
    let second = "";
    for(let i = 1; i < food.length; i++){
        if(food[i] >= 2){
            while(food[i] >= 2){
                answer += String(i);
                food[i] = food[i] - 2;
            }
        }
    }
    second = answer.split('').reverse().join('');
    answer += "0";
    answer += second;
    return answer;
}