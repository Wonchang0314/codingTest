function solution(sequence, k) {
    var answer = [];
    let left = 0;
    let sum = 0;
    for(let right = 0; right < sequence.length; right++){
        sum += sequence[right];
        if(sum === k) answer.push([left, right]);
        while(sum >= k) {
            sum -= sequence[left++];
            if(sum === k) answer.push([left, right]);
        }
    }
    answer.sort((a, b) => (Math.abs(a[0] - a[1])) - Math.abs((b[0] - b[1])));
    
    return answer.shift();
}