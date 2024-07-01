
function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = new Array(arr2[0].length).fill(0);
    }
    
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2[0].length; j++){
            let current = 0;
            for(let k = 0; k < arr1[0].length; k++){
                current += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = (current);
        }
    }
    return answer;
}