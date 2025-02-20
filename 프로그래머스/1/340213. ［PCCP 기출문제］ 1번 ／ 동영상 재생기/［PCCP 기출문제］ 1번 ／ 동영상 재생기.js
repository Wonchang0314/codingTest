const convertToSecond = (time) => {
    const temp = time.split(':');
    const min = Number(temp[0]) * 60;
    const second = Number(temp[1]);
    return min + second;
}
const duringOp = (time, opStart, opEnd) => {
    return time >= opStart && time <= opEnd
} 
function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    const videoLen = convertToSecond(video_len);
    let current = convertToSecond(pos);
    const opStart = convertToSecond(op_start);
    const opEnd = convertToSecond(op_end);
    
    console.log(current, opStart, opEnd)
    for(const command of commands) {
        if(command === 'next') {
            current = duringOp(current, opStart, opEnd) ? opEnd : current;
            current = Math.min(current + 10, videoLen);
            current = duringOp(current, opStart, opEnd) ? opEnd : current;
        }
        else{
            current = duringOp(current, opStart, opEnd) ? opEnd : current;
            current = Math.max(current - 10, 0);
            current = duringOp(current, opStart, opEnd) ? opEnd : current;
        }
    }

    let min = String(Math.floor(current / 60));
    if(min.length === 1) min = "0" + min;
    let second = String(current % 60);
    if(second.length === 1) second = "0" + second;
    answer = min + ":" + second;
    return answer;
}