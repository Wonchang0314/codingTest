function solution(N, stages) {
    var answer = [];
  
    let failRate = {};
    for(let i = 1; i <= N; i++) {
        failRate[i] = 0;
    }
    for(const stage of stages) { 
        if(stage > N) continue;
        failRate[stage] += 1;
    }
    
    let peoples = stages.length;
    for(const [key, value] of Object.entries(failRate)) {
        const temp = value / peoples;
        peoples -= value;
        failRate[key] = temp;
    }
    
    answer = Object.entries(failRate).sort((a, b) => b[1] - a[1]);
    answer = answer.map(e => Number(e[0]));
    return answer;
}