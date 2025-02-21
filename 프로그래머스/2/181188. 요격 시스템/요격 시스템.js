function solution(targets) {
    var answer = 0;
    targets.sort((a, b) => a[1] - b[1]);
    
    let last = -1;
    for(let [s, e] of targets) {
        if(s >= last) {
            last = e;
            answer += 1;
        }
    }
    
    return answer;
}