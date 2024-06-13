function solution(msg) {
    var answer = [];
    let index = 1;
    let dic = new Map();
    for(let i = 65; i <= 90; i++){
        dic.set(String.fromCharCode(i), index++);
    }
    
    for(let i = 0; i < msg.length; i++){
        let j = i + 1;
        let current = msg.substring(i, j);

        while(dic.has(current) && j <= msg.length){ // 주어진 문자열에서 사전과 일치하는 가장 긴 문자를 찾기 위함
            j += 1;
            current = msg.substring(i, j); // 길이를 늘려가며 최신화
        }
        
        let prev = msg.substring(i, j - 1); // 이 시점에서 반복문을 빠져나와 주어진 문자열은 최소 길이 1이상을 보장
        answer.push(dic.get(prev)); // 사전과 매칭되는 가장 긴 문자열을 정답배열에 추가
        
        dic.set(current, index++); // 이 시점에 current는 사전에 존재하지 않는 문자임을 보장, 그렇기에 사전에 추가하고 인덱스를 증가시켜줌
        i = j - 2; // 방금 사전에 추가한 문자열의 마지막에서 j - 2 번째로 인덱스를 최신화 (위에서 i는 1이 증가되기에 -2를 해줌)
    }
    return answer;
}
