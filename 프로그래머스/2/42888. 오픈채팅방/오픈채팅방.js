function solution(record) {
    var answer = [];
    record = record.map(r => r.split(' '));
    let users = new Map();
    
    for(let i = 0; i < record.length; i++){
        if (record[i][0] === 'Enter' || record[i][0] === 'Change') {
            users.set(record[i][1], record[i][2]);
        }
    }

    for(let i = 0; i < record.length; i++){
        if(record[i][0] === 'Enter'){
            answer.push(users.get(record[i][1]) + "님이 들어왔습니다.");
        }
        else if(record[i][0] === 'Leave'){
            answer.push(users.get(record[i][1]) + "님이 나갔습니다.");
        }
    }

    return answer;
}