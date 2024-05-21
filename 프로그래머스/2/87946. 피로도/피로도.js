
function solution(k, dungeons) {
    let maxCount = 0; 
    function recursion(visited, count, k){
        if(count > maxCount){
            maxCount = count;
        }
        for(let i = 0; i < dungeons.length; i++){
            if(visited[i] === true) continue;
            else if(dungeons[i][0] <= k){
                visited[i] = true;
                recursion(visited, count + 1, k - dungeons[i][1]);
                visited[i] = false;
            }
        }
    }
    
    recursion(Array(dungeons.length).fill(false), 0, k);
    return maxCount;
}