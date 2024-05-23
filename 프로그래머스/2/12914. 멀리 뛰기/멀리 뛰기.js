

function solution(n) {
    let result = new Array(2001);
    result[1] = 1;
    result[2] = 2;
    if(n === 1){
        return 1;
    }
    for(let i = 3; i <= n; i++){
        result[i] = (result[i - 1] + result[i - 2]) % 1234567;
    }
    return result[n];
}