
function solution(k, dungeons) {   
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const dfs = (currentK, count, dungeons, visited) => {
        answer = Math.max(answer, count);
        for(let i = 0; i < dungeons.length; i++) {
            if(currentK >= dungeons[i][0] && !visited[i]) {
                visited[i] = true;
                dfs(currentK - dungeons[i][1], count + 1, dungeons, visited);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0, dungeons, visited);
    return answer;
}