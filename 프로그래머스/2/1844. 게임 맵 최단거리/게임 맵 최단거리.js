function solution(maps) {
    let answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let queue = [[0, 0, 1]];
    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    while(queue.length){
        let [x, y, distance] = queue.shift();
    
        if(visited[x][y] === true) continue;
        else if(x === n - 1 && y === m - 1) return distance;
     
        visited[x][y] = true;
        for(let i = 0; i < 4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && nx < n && ny >= 0 && ny < m){
                if(maps[nx][ny] === 1 && !visited[nx][ny]) queue.push([nx, ny, distance + 1]);
            }
        }
    }
    return -1;
}