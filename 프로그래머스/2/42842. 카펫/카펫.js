function findAnswer(sum, brown, yellow){
    for(let i = 3; i < Math.floor(sum / 2); i++){
        let j = sum / i; 
        if(i >= j){
            let a = sum - ((i - 2) * (j - 2));
            let b = (i - 2) * (j - 2);
            if(a === brown && b === yellow){
                return [i,j];
            }
        }
    }
}
function solution(brown, yellow) {
    let sum = brown + yellow;
    let answer = findAnswer(sum, brown, yellow);
    return answer;
}