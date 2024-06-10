const isPrime = (num) => { 
    if(num % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(num); i += 2){
        if(num % i === 0) return false;
    }
    return true;
}
function solution(n) {
    let arr = [];
    arr.push(2);
    for(let i = 3; i <= n; i++){
        if(isPrime(i)) arr.push(i);
    }
    return arr.length;
}