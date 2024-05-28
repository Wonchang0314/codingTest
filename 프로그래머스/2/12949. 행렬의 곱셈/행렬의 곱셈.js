function solution(arr1, arr2) {
    let rowOne = arr1.length, colOne = arr1[0].length;
    let rowTwo = arr2.length, colTwo = arr2[0].length;
    let answer = new Array(rowOne);
    
    for(let i = 0; i < rowOne; i++){
        answer[i] = new Array(colTwo).fill(0);
        for(let j = 0; j < colTwo; j++){
            let sum = 0;
            for(let k = 0; k < colOne; k++){
                sum += arr1[i][k] * arr2[k][j];   
            }
            answer[i][j] = sum;
        }   
    }
    return answer
}
