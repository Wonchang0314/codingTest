function solution(dirs) {
    var answer = 0;
    let visited = new Array(11).fill(0).map(() => new Array(11).fill(false));
    let y = 5;
    let x = 5;
    let paths = new Set();
    for(let i = 0; i < dirs.length; i++){
        let ny = y;
        let nx = x;
        if(dirs[i] === 'U' && y > 0) y -= 1;
        else if(dirs[i] === 'D' && y < 10) y += 1;
        else if(dirs[i] === 'R' && x < 10) x += 1;
        else if(dirs[i] === 'L' && x > 0) x -= 1;
        if(ny !== y || nx !== x){
            let fromTo = String(ny) + String(nx) + String(y) + String(x);
            let toFrom = String(y) + String(x) + String(ny) + String(nx);
            if(!paths.has(fromTo) && !paths.has(toFrom)) {
                paths.add(fromTo);
                paths.add(toFrom);
                answer += 1;
            }
        }
    }
    return answer;
}