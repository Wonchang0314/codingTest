const isValid = (nx, ny, n, m, maps) => {
    return nx >= 0 && nx < m && ny >= 0 && ny < n && maps[ny][nx] !== 'X';
};

function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));
    let endX = -1;
    let endY = -1;
    
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    const queue = [];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(maps[i][j] === 'S'){
                queue.push([i, j, 0, 0]);
                visited[i][j][0] = true;
            }
            if(maps[i][j] === 'E'){
                endX = j;  
                endY = i; 
            }
        }
    }
    
    while(queue.length > 0){
        const [y, x, k, time] = queue.shift(); 
        
        if(x === endX && y === endY && k === 1) return time;
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(isValid(nx, ny, n, m, maps) && !visited[ny][nx][k]) {
                visited[ny][nx][k] = true;
                if(maps[ny][nx] === 'L'){
                    queue.push([ny, nx, 1, time + 1]);
                }
                else {
                    queue.push([ny, nx, k, time + 1]);
                }
            }
        }
    }
    return -1;
}
