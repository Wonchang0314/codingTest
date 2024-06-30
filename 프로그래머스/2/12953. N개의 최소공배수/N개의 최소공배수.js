const gcd = (n, m) => {
    while(m !== 0){
        let temp = m;
        m = n % m;
        n = temp;
    }
    return n;
}
const lcm = (n, m) => {
    return n * m / gcd(n, m);
}
function solution(arr) {
    let answer = 0;
    answer = arr.reduce((a, b) => lcm(a, b));
    return answer;
}