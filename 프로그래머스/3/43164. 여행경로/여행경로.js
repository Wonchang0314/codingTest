function solution(tickets) {
    var answer = [];
    let path = new Map();
    let stack = [];
    for (let i = 0; i < tickets.length; i++) {
        if (!path.has(tickets[i][0])) {
            path.set(tickets[i][0], [tickets[i][1]]);
        } else {
            path.get(tickets[i][0]).push(tickets[i][1]);
        }
    }
    let paths = Array.from(path);
    paths.forEach(p => p[1].sort());
    path = new Map(paths);
    
    stack.push('ICN');
    while(stack.length > 0){
        let from = stack[stack.length - 1];
        if(path.get(from) && path.get(from).length > 0){
            let to = path.get(from).shift();
            stack.push(to)
        }
        else{
            answer.push(stack.pop());   
        }
    }

    return answer.reverse();
}