function solution(storey) {
    var answer = 0;
    while(storey !== 0){
        let lastDigit = storey % 10;
        
        if(lastDigit > 5){
            answer += (10 - lastDigit);
            storey = Math.floor(storey / 10) + 1;
        }
        else if(lastDigit < 5) {
            answer += lastDigit;
            storey = Math.floor(storey / 10);
        }
        else{
            let nextDigit = Math.floor(storey / 10) % 10;
            if(nextDigit >= 5){
                answer += (10 - lastDigit);
                storey = Math.floor(storey / 10) + 1;
            }
            else{
                answer += lastDigit;
                storey = Math.floor(storey / 10);
            }
        }
    }
    return answer;
}