function compress(s, i){
    let result = '';
    let count = 1;
    for(let j = 0; j < s.length; j += i){
        let current = s.slice(j, j + i);
        let next = s.slice(j + i, j + 2 * i);
        if(current === next) count += 1;
        else {
            if(count > 1) result += String(count) + current;
            else result += current;
            count = 1;
        }
    }
    return result;
}
function solution(s) {
    let answer = s.length;
    
    if (s.length === 1) return 1;
    
    for(let i = 1; i <= Math.floor(s.length / 2); i++){
        let compressed = compress(s, i);
        answer = Math.min(answer, compressed.length);
    }
    return answer;
}