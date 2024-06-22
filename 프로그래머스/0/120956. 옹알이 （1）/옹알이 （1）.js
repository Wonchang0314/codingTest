function solution(babbling) {
    var answer = 0;
    let regex = /aya|ye|woo|ma/g;
    
    for(let i = 0; i < babbling.length; i++){
        babbling[i] = babbling[i].replace(regex, '');
    }
    
    babbling.forEach(word => {
        if(word === '') answer += 1;
    })
    return answer;
}