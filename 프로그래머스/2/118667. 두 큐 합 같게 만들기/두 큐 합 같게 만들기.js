function solution(queue1, queue2) {
    let answer = 0;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    
    if((sum1 + sum2) % 2 !== 0) return -1;

    let count = 0;
    const target = (sum1 + sum2) / 2;
    const maxOperation = queue1.length * 3;
    
    let index1 = 0;
    let index2 = 0;
    
    while(sum1 !== target && count <= maxOperation){
        if(sum1 > target){
            let temp = queue1[index1];
            sum1 -= temp;
            queue2.push(temp);
            sum2 += temp;
            index1 += 1;
        }
        else{
            let temp = queue2[index2];
            sum2 -= temp;
            queue1.push(temp);
            sum1 += temp;
            index2 += 1;
        }
        count += 1;
    }
    answer = sum1 === target ? count : -1;
    return answer;
}