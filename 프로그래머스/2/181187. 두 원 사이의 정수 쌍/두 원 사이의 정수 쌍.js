function solution(r1, r2) {
    var answer = 0;
    
    for(let x = 1; x <= r2; x++){
        let minY = Math.ceil(Math.sqrt(Math.pow(r1, 2) - Math.pow(x, 2)));
        let maxY = Math.floor(Math.sqrt(Math.pow(r2, 2) - Math.pow(x, 2)));
        
        if(isNaN(minY)) minY = 0;
        answer += maxY - minY + 1;
    }
    answer *= 4;
    return answer;
}