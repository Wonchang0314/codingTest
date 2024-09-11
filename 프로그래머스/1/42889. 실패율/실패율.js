function solution(N, stages) {
    var answer = [];
    let failRate = {};
    
    for(let i = 1; i <= N; i++){
        failRate[i] = 0;
        const filterd = stages.filter(e => e > i);
        failRate[i] = (stages.length - filterd.length) / stages.length; 
        stages = filterd;
    }
    failRate = Object.entries(failRate).sort(([, a], [, b]) => b - a);
    failRate.forEach(e => {
        answer.push(Number(e[0]));
    })
    
    return answer;
}