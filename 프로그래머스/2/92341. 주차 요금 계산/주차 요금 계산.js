const calculateFee = (time, fees) => {
    if (time <= fees[0]) return fees[1];
    return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
};

function solution(fees, records) {
    let record = records.map(r => r.split(' '));
    let car = new Map();
    let answer = new Map();
    let result = [];
    for(let i = 0; i < record.length; i++){
        if(record[i][2] === 'IN'){
            car.set(record[i][1], record[i][0]);
            if(!answer.has(record[i][1])){
                answer.set(record[i][1], [0, 0]);
            }
        }
        else{
            let inTime = car.get(record[i][1]).split(':');
            let outTime = record[i][0].split(':');
            let hour = Number(outTime[0]) - Number(inTime[0]);
            let min = 0;
            if(Number(outTime[1]) < Number(inTime[1])){
                hour -= 1;
                min = (60 + Number(outTime[1])) - Number(inTime[1]); 
            }
            else{
                min = Number(outTime[1]) - Number(inTime[1]);
            }
            let total = 0;
            if(hour !== 0 || min !== 0){
                if(hour > 0) total = (60 * hour) + min;
                else total = min;
            }
            let prev = answer.get(record[i][1])[1];
            total += prev;
            let fee = calculateFee(total, fees);
            answer.set(record[i][1], [fee, total]);
            car.delete(record[i][1]);
        }
    }
    car.forEach((time, car) => {
        let inTime = time.split(':');
        let hour = Number(inTime[0]);
        let min = Number(inTime[1]);
        hour = 23 - hour;
        min = 59 - min;
        let prev = answer.get(car)[1];
        let total = (60 * hour) + min + prev;
        let fee = calculateFee(total, fees);
        //console.log(total, fee);
        answer.set(car, [calculateFee(total, fees), total]);
    })
    
    answer = Array.from(answer);
    answer.sort((a, b) => Number(a[0]) - Number(b[0]));
    answer.forEach(car => {
        result.push(car[1][0]);
    })
    return result;
}