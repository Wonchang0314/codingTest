function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let zeroCount = 0;
    let rank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] !== 0){
            if(win_nums.includes(lottos[i])){
                count += 1;
            }
        }
        else{
            zeroCount += 1;
        }
    }
    answer.push(rank[zeroCount + count]);
    answer.push(rank[count])
    
    return answer;
}