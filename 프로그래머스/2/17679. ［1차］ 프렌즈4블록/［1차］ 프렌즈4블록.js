const check = (board, x, y) => {
    if (x + 1 < board.length && y + 1 < board[0].length) {
        const value = board[x][y];
        if (value !== '' && 
            value === board[x][y + 1] && 
            value === board[x + 1][y] && 
            value === board[x + 1][y + 1]) {
            return true;
        }
    }
    return false;
}

function solution(m, n, board) {
    var answer = 0;
    let allSet = false;
    let deleted = [];
    
    let spinBoard = [];
    for(let i = 0; i < board[0].length; i++){
        let temp = [];
        for(let j = board.length - 1; j >= 0; j--){
            temp.push(board[j][i]);
        }
        spinBoard.push(temp);
    }
    
    while(!allSet){
        for(let i = 0; i < spinBoard.length; i++){
            for(let j = 0; j < spinBoard[i].length; j++){
                if(check(spinBoard, i, j)){
                    deleted.push([i, j]);
                    deleted.push([i, j+1]);
                    deleted.push([i+1, j]);
                    deleted.push([i+1, j+1]);
                }
            }
        }
    
        deleted = Array.from(new Map(deleted.map(e => [e.toString(), e])).values());
        if(deleted.length === 0) allSet = true;
        
        deleted.forEach(e => {
            let [x, y] = e;
            spinBoard[x][y] = '';
        })
    
        for(let i = 0; i < spinBoard.length; i++){
            spinBoard[i] = spinBoard[i].filter(e => e !== '');
            while(spinBoard[i].length < m){
                spinBoard[i].push('');
            }
        }
        
        answer += deleted.length;
        deleted = [];
    }
    return answer;
}