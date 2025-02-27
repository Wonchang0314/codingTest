function solution(players, m, k) {
    var answer = 0;
    let servers = [];
    
    for(let i = 0; i < players.length; i++) {
        while(servers.length && servers[0] <= i) {
            servers.shift();
        }
        let requiredServer = Math.floor(players[i] / m);
        
        let additionalServer = requiredServer - servers.length;
        if(additionalServer > 0) {
            for(let j = 0; j < additionalServer; j++) {
                servers.push(i + k)
            }
            answer += additionalServer
        }
    }
    
    return answer;
}