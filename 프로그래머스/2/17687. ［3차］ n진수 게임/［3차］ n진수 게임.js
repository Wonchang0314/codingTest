function solution(n, t, m, p) {
    var answer = '';
    let totalStr = '';
    
    for(let i = 0; i < t * m; i++){
        totalStr += i.toString(n);
    }
    
    for(let i = p - 1; i < t * m; i += m){
        let char = totalStr[i];
        answer += char.toUpperCase();
    }
    return answer;
}