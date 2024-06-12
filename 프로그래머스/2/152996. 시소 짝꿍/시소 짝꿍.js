function solution(weights) {
    var answer = 0;
    let weightMap = new Map();
    for(let i = 0; i < weights.length; i++){
        if(weightMap.has(weights[i])){
            weightMap.set(weights[i], weightMap.get(weights[i]) + 1);
        }
        else weightMap.set(weights[i], 1);
    }
    let ws = new Set(weights);
    ws.forEach(w => {
        let count = weightMap.get(w);
        if(count > 1) answer += (count * (count - 1)) / 2;
        
        let possible = [2 / 3, 2 / 4, 3 / 2, 3 / 4, 4 / 2, 4 / 3];
        possible.forEach(p => {
            let pw = w * p;
            if(weightMap.has(pw)) answer += weightMap.get(pw) * count;
            weightMap.set(w, 0);
        })
    })
    return answer;
}