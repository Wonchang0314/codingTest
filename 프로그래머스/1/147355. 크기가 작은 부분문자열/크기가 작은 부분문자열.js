function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){
        let current = t.slice(i, i + p.length);
        if(Number(current) <= Number(p)) answer += 1;
    }
    return answer;
}