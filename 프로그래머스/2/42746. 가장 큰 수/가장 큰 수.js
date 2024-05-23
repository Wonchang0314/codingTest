function solution(numbers) {
    let answer = 0;
    const strNums = numbers.map(x => String(x));
    strNums.sort((a , b) => (b + a) - (a + b));
    
    if (strNums[0] === '0') {
        return '0';
    }
    answer = strNums.join('');
    
    return answer;
}