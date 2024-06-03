function solution(x, y, n) {
    let answer = [];
    let queue = [[x, 0]];
    let index = 0;
    let tried = new Set();
    while(queue.length && index < queue.length){
        let [num, count] = queue[index];
        index += 1;
        if(num === y){
            return count;
        }
        if(num + n <= y && !tried.has(num + n)){
            queue.push([num + n, count + 1]);
            tried.add(num + n);
        }
        if(num * 2 <= y && !tried.has(num * 2)){
            queue.push([num * 2, count + 1]);
            tried.add(num * 2);
        }
        if(num * 3 <= y && !tried.has(num * 3)){
            queue.push([num * 3, count + 1]);
            tried.add(num * 3);
        }
    }
    return -1;
}