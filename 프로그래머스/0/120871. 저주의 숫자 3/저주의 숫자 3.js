function solution(n) {
    var answer = 0;
    let j = 1;
    for(let i = 1; i <= n; i++){
        while(j % 3 === 0 || String(j).includes('3')) {
            j += 1;    
        }
        if (i !== n) {
            j += 1;
        }
    }

    answer = j;
    return answer;
}