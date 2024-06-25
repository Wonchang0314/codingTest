function solution(n, words) {
    let answer = [0, 0];
    let used = new Map();
    words.forEach(word => used.set(word, false));
    let turn = 1;
    let round = 1;
    let prev = '';
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(used.get(word) === true){
            answer[0] = turn;
            answer[1] = round;
            return answer;
        }
        else if(prev !== '' && !word.startsWith(prev[prev.length-1])){
            answer[0] = turn;
            answer[1] = round;
            return answer;
        }
        else {
            used.set(word, true);
            prev = word;
            if(turn === n){
                round += 1;
                turn = 1;
            }
            else turn += 1;
        }
    }
    return answer;
}