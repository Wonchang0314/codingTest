
function solution(n) {
    let a = 0;
    let b = 1;
    let fib = 0;;
    for(let i = 2; i <= n; i++){
        fib = (a + b) % 1234567;
        a = b;
        b = fib;
    }
    return fib % 1234567;
}