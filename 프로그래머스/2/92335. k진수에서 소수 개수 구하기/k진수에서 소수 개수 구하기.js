function isPrime(n){
    if(n === 1 || (n > 2 && n % 2 === 0)){
        return false;
    }
    for(let i = 3; i <= Math.sqrt(n); i += 2){
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