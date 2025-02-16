const check = (x, y, n, m, maps) => {
    return x >= 0 && x < n && y >= 0 && y < m && maps[x][y] === 1;
}

function solution(maps) {
    let answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const targetX = n - 1;
    const targetY = m - 1;
    
    const queue = [];
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    queue.push([0, 0, 1]);
    visited[0][0] = true;
    
    while(queue.length) {
        const [x, y, dist] = queue.shift();
        
        if(x === targetX && y === targetY) {
            return dist;
        }
        
        for(const [dx, dy] of directions) {
            const nextX = x + dx;
            const nextY = y + dy;
            if(check(nextX, nextY, n, m, maps) && !visited[nextX][nextY]) {
                visited[nextX][nextY] = true;
                queue.push([nextX, nextY, dist + 1]);
            }
        }
    }
    
    
    
    return -1;
}