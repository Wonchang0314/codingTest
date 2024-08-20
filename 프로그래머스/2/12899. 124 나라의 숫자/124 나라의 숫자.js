function solution(n) {
    var answer = '';
    if(n === 1 || n === 2) return String(n);
    if(n === 3) return '4';
    
    while(n > 0){
        if(n % 3 === 1){
            answer += '1';
            n = Math.floor(n / 3);
        }
        else if (n % 3 === 2){
            answer += '2'
            n = Math.floor(n / 3);
        }
        else if(n % 3 === 0){
            answer += '4'
            n = Math.floor(n / 3) - 1;
        }
    }
    
    answer = answer.split('').reverse().join('');
    return answer;
}