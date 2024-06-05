function solution(number, limit, power) {
    var answer = 0;
    
    const count = (num) => {
        let result = 0;
        for(let i = 1; i <= Math.sqrt(num); i++){
            if(num % i === 0) {
                result += 1;
                if(num / i !== i) result += 1;
            }
        }
        return result;
    }
    
    for(let i = 1; i <= number; i++){
        let divisor = count(i);
        if(divisor > limit) divisor = power;
        answer += divisor;
    }
    return answer;
}