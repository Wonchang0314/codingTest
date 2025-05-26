const factorial = (n) => {
  let res = 1;
  for(let i = 2; i <= n; i++) res *= i;
  return res;
}

function solution(n, k) {
    var answer = [];
    const arr = new Array(n).fill(1);
    for(let i = 1; i < n; i++) arr[i] = arr[i-1] + 1;
    
    let nth = k - 1;
    
    while(arr.length) {
        if(nth === 0) {
            answer.push(...arr);
            break;
        }
        
        let fact = factorial(arr.length - 1);
        let idx = Math.floor((nth) / fact);
        nth = nth % fact;
            
        answer.push(arr[idx]);
        arr.splice(idx, 1);
    }
    
    return answer;
}