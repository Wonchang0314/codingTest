function solution(numbers) {
    let answer = 0;
    let strNums = numbers.map(String);
    strNums.sort((a, b) => Number(b + a) - Number(a + b));
    answer = strNums.join('');
    
    return answer[0] === '0' ? '0' : answer;
}