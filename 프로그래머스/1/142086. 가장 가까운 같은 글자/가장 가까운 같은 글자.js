function solution(s) {
    var answer = [];
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(stack.includes(s[i])){
            let temp = [...stack];
            let count = 1;
            let prev = temp.pop();
            while(prev !== s[i]){
                prev = temp.pop();
                count += 1;
            }
            answer.push(count);
            stack.push(s[i]);
        }
        else{
            answer.push(-1);
            stack.push(s[i]);
        }
    }
    return answer;
}