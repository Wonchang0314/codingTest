function solution(want, number, discount) {
    var answer = 0;
    for(let i = 0; i <= discount.length - 10; i++){
        let current = discount.slice(i, i + 10);
        if(check(current, number, want)){
            answer += 1;
        }
    }
    return answer;
}
function check(arr, num, w){
    let countMap = {};
    arr.forEach((item) => {
        if(countMap[item]){
            countMap[item] += 1;
        }
        else{
            countMap[item] = 1;
        }
    })
    for(let i = 0; i < num.length; i++){
        if(countMap[w[i]] !== num[i]){
            return false;
        }
    }
    return true;
}