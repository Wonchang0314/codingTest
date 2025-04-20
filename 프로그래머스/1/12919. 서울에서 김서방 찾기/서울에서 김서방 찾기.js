function solution(seoul) {
    var answer = '';
    seoul.forEach((e, i) => {
        if(e === 'Kim') answer += `김서방은 ${i}에 있다`
    })
    return answer;
}