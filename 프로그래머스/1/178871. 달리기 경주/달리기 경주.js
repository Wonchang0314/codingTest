function solution(players, callings) {
    var answer = new Array(players.length).fill('');
    let m = new Map();
    players.forEach((player, i) => {
        m.set(player, i);
    })
    
    callings.forEach(call => {
        let current = m.get(call);
        m.set(call, current - 1);
        let temp = players[current - 1];
        m.set(temp, m.get(temp) + 1);
        players[current - 1] = call;
        players[current] = temp;
    })
    
    answer = [...players]
    return answer;
}