function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (idx, current) => {
        if(idx === numbers.length) {
            if(current === target){
                answer += 1;
            }
            return;
        }
        dfs(idx + 1, current + numbers[idx]);
        dfs(idx + 1, current - numbers[idx]);
    }
    dfs(0, 0);
    return answer;
}
