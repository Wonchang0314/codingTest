function solution(n, edge) {
    var answer = 0;
    const graph = Array.from({ length: n + 1 }, () => []);
    edge.forEach(([a, b]) => {
        graph[a].push(b)
        graph[b].push(a);
    });
    
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;
    
    const queue = [1];
    while(queue.length > 0) {
        const src = queue.shift();
        for(const dest of graph[src]){
            if(distance[dest] === 0){
                queue.push(dest);
                distance[dest] = distance[src] + 1;
            }
        }
    }
    const max = Math.max(...distance);
    answer = distance.filter(e => e === max).length;
    return answer;
}