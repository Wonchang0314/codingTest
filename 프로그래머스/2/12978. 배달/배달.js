function solution(N, road, K) {
    var answer = 0;
    let graph = new Map();
    for (let i = 1; i <= N; i++) {
        graph.set(i, []);
    }
    
    road.forEach(([a, b, c]) => {
        graph.get(a).push({ to: b, cost: c });
        graph.get(b).push({ to: a, cost: c });
    });
    
    let distances = new Map();
    for (let i = 1; i <= N; i++) {
        distances.set(i, Infinity);
    }
    distances.set(1, 0);
    let pq = [{to: 1, cost: 0}];
    
    while(pq.length){
        pq.sort((a, b) => a.cost - b.cost);
        let { to: current, cost: currentCost } = pq.shift();
        
        graph.get(current).forEach(({to, cost}) => {
            let newCost = currentCost + cost;
            if(newCost < distances.get(to)){
                distances.set(to, newCost);
                pq.push({to: to, cost: newCost});
            }
        })
    }
    
    distances.forEach(cost => {
        if (cost <= K) answer += 1;
    });
    
    return answer;
}