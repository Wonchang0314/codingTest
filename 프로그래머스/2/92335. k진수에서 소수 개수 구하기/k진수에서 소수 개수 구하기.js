function isPrime(n){
    if(n === 1){
        return false;
    }
    if(n <= 3){
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false; 
    }
    for(let i = 5; i * i <= n; i += 6){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
function solution(n, k) {
    var answer = 0;
    let input = n.toString(k);
    let arr = input.split('0');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== '' && isPrime(Number(arr[i]))){
            answer += 1;
        }
    }
    
    return answer;
}