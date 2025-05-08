function solution(n) {
    var answer = 0;
    const queens = [];
    
    // 유망 함수
    const isSafe = (x, y) => {
        for(let i = 0; i < x; i++) {
            if(queens[i] === y || Math.abs(queens[i] - y) === x - i) return false;
        }
        return true;
    }
    
    const dfs = (x) => {
        if(x === n) {
            answer += 1;
            return;
        }
        for(let y = 0; y < n; y++) {
            if(isSafe(x, y)) {
                queens[x] = y;
                dfs(x + 1);
            }
        }
    }
    dfs(0);
    return answer;
}