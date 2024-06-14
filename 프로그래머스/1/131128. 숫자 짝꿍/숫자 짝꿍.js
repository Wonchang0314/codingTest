const countChars = (s) => {
    const counts = new Map();
    for (const char of s) {
        if(counts.has(char)) counts.set(char, counts.get(char) + 1);
        else counts.set(char, 1);
    }
    return counts;
};
function solution(X, Y) {
    var answer = '';
    let x = countChars(X);
    let y = countChars(Y);
    
    let common = [];
    for(let [key, value] of x){
        if(y.has(key)){
            let minCount = Math.min(value, y.get(key))
            for(let i = 0; i < minCount; i++){
                common.push(key);
            }
        }
    }
    common.sort((a, b) => Number(b) - Number(a));
    answer = common.join('');
    if(answer === '') return '-1'
    else if(answer.charAt(0) === '0') return '0';

    return answer;
}