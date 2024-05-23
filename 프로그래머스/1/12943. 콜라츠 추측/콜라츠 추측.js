function solution(num) {
    var answer = num;
    let count = 0;
    if(num === 1){
        return 0;
    }
    for(let i = 0; i < 500; i++){
        if(answer === 1){
            break;
        }
        if(answer % 2 === 0){
            answer = Math.floor(answer / 2);
            count += 1
        }
        else{
            answer = (answer * 3) + 1;
            count += 1;
        }
    }
    if(count === 500){
        return -1
    }
    return count;
}