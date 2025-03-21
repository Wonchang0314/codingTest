function solution(citations) {
    var answer = 0;
    const input = [...citations];
    input.sort((a, b) => b - a);
    
    while(answer < input.length && input[answer] > answer) {
        answer++;
    }
    
    return answer;
}