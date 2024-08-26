function solution(routes) {
    var answer = 0;
    routes.sort((a, b) => a[1] - b[1]);
    let current = -30001;
    
    for(let i = 0; i < routes.length; i++){
        if(current < routes[i][0] || current > routes[i][1]){
            answer += 1;
            current = routes[i][1];
        }
    }
    return answer;
}