function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    let maxDay = days[0];
    let count = 0;
    days.forEach((day) => {
        if(day <= maxDay) {
            count += 1;
        }
        else {
            answer.push(count);
            count = 1;
            maxDay = day;
        }
    })
    answer.push(count);
    return answer;
}