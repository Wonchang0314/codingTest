function solution(s) {
    var answer = '';
    let input = s.split(' ');
    
    input = input.map(e => {
        let res = '';
        for(let i = 0; i < e.length; i++){
            res += (i % 2 === 0) ? e[i].toUpperCase() : e[i].toLowerCase();
        }
        return res;
    })
    
    answer = input.join(' ');
    return answer;
}