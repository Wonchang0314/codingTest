function solution(k, tangerine) {
    let frequency = [];
    tangerine.forEach(item => {
        if(frequency[item]){
            frequency[item] += 1;
        }
        else{
            frequency[item] = 1;
        }
    });
    frequency.sort((a, b) => b - a);
    let count = 0;
    let target = 0;
    while(target < k){
        target += frequency[count];
        count += 1;
    }
    return count;
}