function find (parent, i) {
    if(parent[i] === i) return i;
    
    parent[i] = find(parent, parent[i]);
    return parent[i];
}
function union (xroot, yroot, parent, rank){
    if(rank[xroot] > rank[yroot]){
        parent[yroot] = xroot;
    }
    else if(rank[xroot] < rank[yroot]) {
        parent[xroot] = yroot;
    }
    else{
        parent[yroot] = xroot;
        rank[xroot] += 1;
    }
}
function solution(n, costs) {
    var answer = 0;
    costs.sort((a, b) => a[2] - b[2]);    
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);
    
    let edges = 0;
    
    for(const edge of costs){
        if(edges === n - 1) break;
        let xroot = find(parent, edge[0]);
        let yroot = find(parent, edge[1]);
        
        if(xroot !== yroot){
            union(xroot, yroot, parent, rank);
            answer += edge[2];
            edges += 1;
        }
    }
    return answer;
}