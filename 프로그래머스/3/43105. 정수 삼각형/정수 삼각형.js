function solution(triangle) {
    let answer = 0;
    const n = triangle.length;
    const memo = Array.from({ length: n }, (_, i) => [...triangle[i]]);
    
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < memo[i].length; j++) {
            if(j === 0) {
                memo[i][j] += memo[i-1][j];
            }
            else if(j === triangle[i].length - 1) {
                memo[i][j] += memo[i-1][j-1];
            }
            else {
                memo[i][j] += Math.max(memo[i-1][j-1], memo[i-1][j]);
            }
        }
    }
        
    return Math.max(...memo[n-1]); 
}