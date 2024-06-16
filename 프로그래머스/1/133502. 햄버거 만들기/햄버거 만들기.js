function solution(ingredient) {
    var answer = 0;
    let stack = [];
    for(let i = 0; i < ingredient.length; i++){
        if(stack[stack.length - 1] === 3 && stack[stack.length - 2] === 2 && stack[stack.length - 3] === 1 && ingredient[i] === 1 && stack.length) {
            stack.pop();
            stack.pop();
            stack.pop();
            answer += 1;
        }
        else if(ingredient[i] === 2 && stack.length && stack[stack.length - 1] === 1){
            stack.push(ingredient[i]);
        }
        else if(ingredient[i] === 3 && stack.length && stack[stack.length - 1] === 2){
            stack.push(ingredient[i]);
        }
        else{
            stack.push(ingredient[i]);
        }
        
    }
    return answer;
}