function solution(cards1, cards2, goal) {
    var answer = [];
    
    goal.forEach(card => {
        if(cards1[0] === card) answer.push(cards1.shift());
        else if(cards2[0] === card) answer.push(cards2.shift());
    })
    
    for(let i = 0; i < goal.length; i++){
        if(goal[i] !== answer[i]) return 'No';
    }
    return 'Yes';
}