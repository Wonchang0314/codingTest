function solution(number, k) {
    var answer = '';
    let stack = [];
    let numArr = number.split('').map(Number);
    for(let i = 0; i < numArr.length; i++){
        while(stack.length && stack[stack.length - 1] < numArr[i] && k > 0) {
            stack.pop();
            k -= 1;
        }
        stack.push(numArr[i]);
    }
    
    while(k > 0) {
        stack.pop();
        k -= 1;
    }
    answer = stack.join('');
    return answer;
}