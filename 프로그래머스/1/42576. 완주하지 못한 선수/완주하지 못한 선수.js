function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    
    for (var i = 0; i < participant.length; i++) {
        if(i == completion.length){
            answer = participant[i];
            break;
        }
        else if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    
    return answer;
}