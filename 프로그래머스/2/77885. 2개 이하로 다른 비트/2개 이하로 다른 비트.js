function solution(numbers) {
    let answer = [];
    let eight = 2;
    numbers.forEach(num => {
        if(num % 2 === 0) answer.push(num + 1);
        else{
            let binary = num.toString(2).split('');
            let lastZero = binary.lastIndexOf('0');
            if (lastZero === -1) binary.splice(1, 0, '0');
            else{
                [binary[lastZero], binary[lastZero + 1]] = ['1', '0'];
            }
            answer.push(parseInt(binary.join(''), 2));
        }
    })
    return answer;
}