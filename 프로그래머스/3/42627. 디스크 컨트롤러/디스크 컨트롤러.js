function solution(jobs) {
    var answer = 0;

    jobs.sort((a, b) => a[0] - b[0]);
    const heap = [];
    let index = 0; 
    let total = 0;
    let current = 0;
    let completed = 0;
    
    while(completed < jobs.length) {
        while(index < jobs.length && jobs[index][0] <= current) {
            heap.push(jobs[index]);
            index += 1;
        }   
        
        heap.sort((a, b) => a[1] - b[1]);
        
        if(heap.length > 0) {
            const [start, duration] = heap.shift();
            current += duration;
            total += current - start;
            completed += 1;
        }
        else{
            current = jobs[index][0];
        }
        
    }
    answer = Math.floor(total / jobs.length);
    return answer;
}