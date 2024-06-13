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

        while(dic.has(current) && j <= msg.length){
            j += 1;
            current = msg.substring(i, j);
        }
        
        let prev = msg.substring(i, j - 1);
        answer.push(dic.get(prev));
        
        dic.set(current, index++);
        i = j - 2;
    }
    return answer;
}