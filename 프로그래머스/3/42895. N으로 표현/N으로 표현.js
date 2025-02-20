function solution(N, number) {
    if(N === number) return 1;
    let answer = 0;
    
    const dp = Array.from({ length: 9 }, () => new Set());
    
    for(let i = 1; i < 9; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j = 1; j < i; j++) {
            for(x of dp[j]) {
                for(y of dp[i - j]) {
                    dp[i].add(x + y);
                    dp[i].add(x - y);
                    dp[i].add(x * y);
                    dp[i].add(Math.floor(x / y))
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    
    return -1;
}