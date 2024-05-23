function solution(n) {
    var answer = [];
    function hanoi(from, sub, to, n){
        if(n === 0){
            return;
        }
        else{
            hanoi(from, to, sub, n-1);
            answer.push([from, to]);
            hanoi(sub, from, to, n-1);
        }
    }
    hanoi(1,2,3,n);
    
    return answer;
}