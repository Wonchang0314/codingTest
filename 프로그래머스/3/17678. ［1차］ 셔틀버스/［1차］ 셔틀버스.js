const hToM = (table) => {
    let result = [];
    table.forEach(t => {
        let temp = t.split(':');
        let hour = Number(temp[0]) * 60;
        let min = Number(temp[1]);
        let total = hour + min;
        result.push(total);
    })
    return result;
}
function solution(n, t, m, timetable) {
    var answer = '';
    let mintable = hToM(timetable);
    
    mintable.sort((a, b) => a - b);
    let shuttleTime = 540;
    let M = m;
    let i = 0;
    while(n > 0){
        let onBus = [];
        while(m > 0 && i < timetable.length){
            if(mintable[i] <= shuttleTime){
                onBus.push(mintable[i]);
                m -= 1;
                i += 1;
            }
            else break;
        }
        if(n === 1){
            if(onBus.length < M){
                answer = shuttleTime;
            }
            else{  
                answer = onBus[onBus.length - 1] - 1;
            }
        }
        shuttleTime += t;
        m = M;
        n -= 1;
    }
    
    let result = [String(Math.floor(answer / 60)), String(answer % 60)];
    if(result[0].length !== 2){
        result[0] = '0' + result[0];
    }
    if(result[1].length !== 2){
        result[1] = '0' + result[1];
    }
    result = result.join(':');
    return result;
}