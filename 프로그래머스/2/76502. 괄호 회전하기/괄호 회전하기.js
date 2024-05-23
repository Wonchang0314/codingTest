function isValid(s) {
    let stack = [];
    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            let last = stack.pop();
            if ((char === ')' && last !== '(') ||
                (char === ']' && last !== '[') ||
                (char === '}' && last !== '{')) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
function solution(s) {
    let arr = [];
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let current = s.slice(i) + s.slice(0, i);
        if(current[0] === ')' || current[0] === ']' || current[0] === '}' || current[current.length-1] === '(' || current[current.length - 1] === '[' || current[current.length - 1] === '{'){
            continue;
        }
        else if(isValid(current)){
            count += 1;
        }
    }
    return count;
}