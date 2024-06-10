function solution(a, b, n) {
    var answer = 0;
    if(n < a) return 0;
    while(n >= a){
        let toMart = Math.floor(n / a) * a;
        let fromMart = (toMart / a) * b;
        n = n - toMart + fromMart;
        answer += fromMart;
    }
    
    return answer;
}