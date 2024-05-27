function solution(elements) {
    let answer = new Set();
    let n = elements.length;
    
    for (let length = 1; length <= n; length++) {
        for(let i = 0; i < n; i++){
            let sum = 0;
            for(let j = 0; j < length; j++){
                sum += elements[(i + j) % n];
            }
            answer.add(sum);
        }
    }    
    return answer.size;
}