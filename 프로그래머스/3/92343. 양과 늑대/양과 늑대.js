function solution(info, edges) {
    var answer = 0;
    const q = [];
    const tree = Array.from({length: info.length}, () => []);
    for(const [from, to] of edges){
        tree[from].push(to);
    }

    q.push([0, 1, 0, new Set()]);
    
    while(q.length){
        const [current, sheep, wolf, visited] = q.shift();
        answer = Math.max(answer, sheep);
        
        for(const next of tree[current]){
            visited.add(next);
        }
        for(const next of visited){
            if(info[next] === 0){
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([next, sheep + 1, wolf, newVisited]);
            }
            else {
                if(wolf + 1 !== sheep){
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([next, sheep, wolf + 1, newVisited]);
                }
            }
        }
    }
    return answer;
}