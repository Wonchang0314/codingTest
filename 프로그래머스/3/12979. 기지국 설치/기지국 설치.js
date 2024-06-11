function solution(n, stations, w) {
    var answer = 0;
    let spread = 0;
    let current = 1;
    let index = 0;
    while(current <= n){
        if(index < stations.length && stations[index] - w <= current){
            current = stations[index] + w + 1;
            index += 1;
        }
        else{
            answer += 1;
            current += 2 * w + 1;
        }
    }
    return answer;
}