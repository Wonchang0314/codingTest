function solution(board)
{
    let answer = 0;
    
    const row = board.length;
    const col = board[0].length;
    
    const dp = Array.from({length: row}, () => new Array(col).fill(0))

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 1) {
                if(i === 0 || j === 0) {
                    dp[i][j] = 1;
                }
                else{
                    const min = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j - 1]) + 1;
                    dp[i][j] = min;
                }
                answer = Math.max(answer, dp[i][j]);
            }
        }
    }
    answer = answer * answer;
    return answer;
}