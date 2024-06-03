const dfs = (index, visited, n, computers) => {
    visited[index] = true;
    for(let i = 0; i < n; i++){
        if(index === i) continue;
        else if(visited[i] === false && computers[index][i]){
            dfs(i, visited, n, computers);
        }
    }
}
function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    
    for(let i = 0; i < n; i++){
        if(visited[i] === false){
            dfs(i, visited, n, computers);
            answer += 1;
        }
    }
    
    return answer;
}