function solution(clothes) {
    var answer = 1;
    let countMap = new Map();

    for(let i = 0; i < clothes.length; i++){
        if(countMap.has(clothes[i][1])){
            countMap.set(clothes[i][1], countMap.get(clothes[i][1]) + 1);
        }
        else{
            countMap.set(clothes[i][1], 1);
        }
    }
    for(let value of countMap.values()){
        answer *= (value + 1)
    }
    return answer - 1;
}