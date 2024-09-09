
function solution(k, dungeons) {   
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);
    
    function backTrack(k, currentCount) {
        answer = Math.max(currentCount, answer);
        
        for(let i = 0; i < dungeons.length; i++){
            if(k >= dungeons[i][0] && visited[i] === false){
                visited[i] = true;
                backTrack(k - dungeons[i][1], currentCount + 1);
                visited[i] = false;
            }
        }
    }
    backTrack(k, 0);
    return answer;
}