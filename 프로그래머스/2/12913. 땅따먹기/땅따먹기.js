function maxScore(a, b, c){
    return Math.max(Math.max(a, b), c);
}
function solution(land) {
    var answer = 0;
    let level = 0;
    for(let i = 1; i < land.length; i++){
        land[i][0] += maxScore(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
        land[i][1] += maxScore(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
        land[i][2] += maxScore(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
        land[i][3] += maxScore(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
    }
    for(let i = 0; i < land[land.length - 1].length; i++){
        answer = Math.max(answer, land[land.length - 1][i]); 
    }
    return answer;
}