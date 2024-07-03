function solution(n) {
    var answer = 0;
    
    const isSafe = (board, row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'q') return false; 
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'q') return false; 
            if (col + (row - i) < n && board[i][col + (row - i)] === 'q') return false; 
        }
        return true;
    }
    const placeQ = (board, row) => {
        if (row === n) {
            answer += 1;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 'q'; 
                placeQ(board, row + 1);
                board[row][col] = ' '; 
            }
        }
    }
    let board = Array.from({ length: n }, () => Array(n).fill(' '));
    placeQ(board, 0);

    
    return answer;
}