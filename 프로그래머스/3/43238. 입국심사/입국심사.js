function solution(n, times) {
    var answer = 0;
    const m = times.length;
    
    let left = 1;
    let right = Math.max(...times) * n;
    
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);
        
        if(count >= n) right = mid;
        else left = mid + 1;
    }
    answer = left
    return answer;
}