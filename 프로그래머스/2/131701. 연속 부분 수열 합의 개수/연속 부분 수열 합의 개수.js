function solution(elements) {
    let answer = new Set();
    let n = elements.length;
    
    let extended = elements.concat(elements);
    for (let length = 1; length <= n; length++) {
        for(let i = 0; i < n; i++){
            let sum = 0;
            for(let j = 0; j < length; j++){
                sum += extended[i + j];
            }
            answer.add(sum);
        }
    }    
    return answer.size;
}