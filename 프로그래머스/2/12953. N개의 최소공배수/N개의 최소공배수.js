function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
function lcm(x, y) {
    return (x * y) / gcd(x, y);
}
function solution(arr) {
   return arr.reduce((acc, num) => lcm(acc, num));
}