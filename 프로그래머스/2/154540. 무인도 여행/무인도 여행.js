function solution(maps) {
    var answer = [];
    let sum = 0;
    let [row, col] = [maps.length, maps[0].length];
    let table = maps.map((v) => v.split(''));
    let [dx, dy] = [[-1, 0, 1, 0],
                    [0, -1, 0, 1],
                   ];
    
    const dfs = (nx, ny, table) => {
        if(nx >= 0 && nx < row && ny >= 0 && ny < col && table[nx][ny] !== "X"){
            sum += Number(table[nx][ny]);
            table[nx][ny] = "X";
            dfs(nx, ny + 1, table);
            dfs(nx, ny - 1, table);
            dfs(nx + 1, ny, table);
            dfs(nx - 1, ny, table);
        }
        return;
    }
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(table[i][j] === 'X') continue;
            sum += Number(table[i][j]);
            table[i][j] = 'X';
            dfs(i, j + 1, table, sum);
            dfs(i, j - 1, table, sum);
            dfs(i + 1, j, table, sum);
            dfs(i - 1, j, table, sum);
            answer.push(sum);
            sum = 0;
        }
    }
    answer.sort((a, b) => a - b);
    return answer.length > 0 ? answer : [-1];
}