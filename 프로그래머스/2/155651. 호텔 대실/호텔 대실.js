function convert(time) {
    const arr = time.split(':').map(Number);
    return arr[0] * 60 + arr[1];
}
function solution(book_time) {
    let answer = 0;
    const startTimes = [];
    const endTimes = [];
    
    book_time = book_time.map((time) => {
        const startMin = convert(time[0]);
        const endMin = convert(time[1]) + 10;
        startTimes.push(startMin);
        endTimes.push(endMin);
    })
    
    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);
    
    let i = 0; 
    let j = 0;
    let maxRooms = 0;
    
    while(i < startTimes.length && j < endTimes.length) {
        if(endTimes[j] > startTimes[i]) {
            answer += 1;
            maxRooms = Math.max(maxRooms, answer)
            i+=1;
        }
        else {
            answer -= 1;
            j+=1;
        }
    }
    
    return maxRooms;
}