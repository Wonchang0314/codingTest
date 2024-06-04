function solution(order) {
    let answer = 0;
    let str = '';
    let stack = [];
    let i = 0;
    for(let j = 1; j <= order.length; j++){
        stack.push(j);
        while(stack[stack.length - 1] === order[i] && stack.length){
            str += stack.pop();
            answer += 1;
            i += 1;
        }
    }
    
    return answer;
}