function solution(m, n, puddles) {
    var answer = 0;
    const mod = 1000000007;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    const puddleSet = new Set(puddles.map(([x, y]) => `${y},${x}`))
    dp[1][1] = 1;
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(i === 1 && j === 1) continue;
            if(puddleSet.has(`${i},${j}`)) dp[i][j] = 0;
            else {
                dp[i][j] = ((dp[i-1][j] || 0) + (dp[i][j-1] || 0)) % mod;
            }
        }
    }
    
    return dp[n][m];
}