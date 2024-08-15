function solution(n, m, section) {
    var answer = 0;
    let current = section[0];
    
    while(current <= section[section.length - 1]){
        answer += 1;
        current += m;
        while(section.length > 0 && current > section[0]){
            section.shift();
        }
        if(section.length > 0) current = section[0];
    }
        
    
    return answer;
}