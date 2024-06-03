function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];
    
    for(let i = 0; i < prices.length; i++){
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]){
            let last = stack.pop();
            answer[last] = i - last;
        }
        stack.push(i);
    }
    while(stack.length > 0){
        let j = stack.pop();
        answer[j] = answer.length - 1 - j
    }
    return answer;
}