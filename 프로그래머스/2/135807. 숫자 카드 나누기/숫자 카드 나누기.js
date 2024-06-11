const GCD = (n, m) => {
    if(n % m === 0){
        return m;
    }
    return GCD(m, n % m);
}
function solution(arrayA, arrayB) {
    let answer = 0;
    const arrGCD = (arr) => {
        return arr.reduce((a, b) => GCD(a, b));
    }
    
    const gcdA = arrGCD(arrayA);
    const gcdB = arrGCD(arrayB);
    
    if(arrayB.every(item => item % gcdA !== 0)){
        answer = Math.max(answer, gcdA);
    }
    if(arrayA.every(item => item % gcdB !== 0)){
        answer = Math.max(answer, gcdB);
    }
    
    return answer;
}