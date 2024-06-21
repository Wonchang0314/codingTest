function solution(dots) {
    var answer = 0;
    const xs = dots.map(dot => dot[0]);
    const ys = dots.map(dot => dot[1]);
    
    let maxX = Math.max(...xs);
    let minX = Math.min(...xs);
    let maxY = Math.max(...ys);
    let minY = Math.min(...ys);

    answer = (maxX - minX) * (maxY - minY);
    return answer;
}