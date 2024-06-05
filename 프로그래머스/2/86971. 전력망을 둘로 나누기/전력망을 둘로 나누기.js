function solution(n, wires) {
    let answer = -1;
    let graph = new Array(n).fill(0).map(() => new Array(n).fill(0)); // 2차원 배열로 그래프 구현
    let visited = new Array(n).fill(false); // 재방문 방지용 배열
    for(let i = 0; i < wires.length; i++){
        let x = wires[i][0];
        let y = wires[i][1];
        graph[x - 1][y- 1] = 1;
        graph[y - 1][x - 1] = 1;
    }
    
    const dfs = (index) => {
        let count = 1; // 각 전력망의 송전탑 갯수를 세기 위한 변수
        visited[index] = true;
        for(let i = 0; i < n; i++){
            if(index === i) continue;
            else if(visited[i] === false && graph[index][i] === 1){
                count += dfs(i, count);
            }
        }
        return count;
    }
    for(let i = 0; i < wires.length; i++){
        let cutX = wires[i][0];
        let cutY = wires[i][1];
        graph[cutX - 1][cutY - 1] = 0;
        graph[cutY - 1][cutX - 1] = 0;  // 전력망 하나씩 끊어보기
        visited = new Array(n).fill(false);
        let sizes = [];
        
        for(let j = 0; j < n; j++){
            if(visited[j] === false){
                sizes.push(dfs(j, 0)); // 계산된 송전탑 갯수를 배열에 보관
            }
        }
        
        let diff = Math.abs(sizes[0] - sizes[1]); // 첫번쨰와 두번째 전력망 갯수의 차이를 계산
        if (answer === -1 || diff < answer) {
            answer = diff;
        }
        graph[cutX - 1][cutY - 1] = 1;
        graph[cutY - 1][cutX - 1] = 1; // 전력망 복구
    }
    return answer;
}