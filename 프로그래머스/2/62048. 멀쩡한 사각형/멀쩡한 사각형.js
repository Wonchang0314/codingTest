function solution(w, h) {
    var answer = 1;
    const gcd = (a, b) => {
        if(a % b === 0) return b;
        return gcd(b, a % b);
    }
    
    const total = w * h;
    const lost = w + h - gcd(w, h);
    answer = total - lost;
    return answer;
}