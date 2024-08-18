const isValid = (ny, nx, n, m, maps) => {
    return ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] !== 0;
}
function solution(maps) {
    let answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const dy = [0, 0, -1, 1];
    const dx = [-1, 1, 0, 0];
    
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    
    while(queue.length > 0){
        const [y, x, distance] = queue.shift();
        
        if(y === n - 1 && x === m - 1) return distance; 
        
        for(let i = 0; i < 4; i++){
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if(isValid(ny, nx, n, m, maps) && !visited[ny][nx]){
                visited[ny][nx] = true;
                queue.push([ny, nx, distance + 1]);
            }
        }
    }
    
    return -1;
}