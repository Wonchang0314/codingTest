const isValid = (dir, dis, n, m, y, x, park) => {
    for (let i = 1; i <= dis; i++) {
        const [ny, nx] = move(dir, i, y, x);
        if (nx < 0 || nx >= m || ny < 0 || ny >= n) return false;
        if (park[ny][nx] === 'X') return false; 
    }
    return true;
}
const move = (dir, dis, y, x) => {
    if(dir === 'N') return [y - dis, x];
    else if(dir === 'S') return [y + dis, x];
    else if(dir === 'W') return [y, x - dis];  
    else if(dir === 'E') return [y, x + dis];
    else return [y, x];
}
function solution(park, routes) {
    var answer = [0, 0];
    const n = park.length;
    const m = park[0].length;
    const map = Array.from({ length: park.length }, () => Array(park[0].length).fill(false));
    
    for(let i = 0; i < park.length; i++){
        for(let j = 0; j < park[0].length; j++){
            if(park[i][j] === 'S'){
                answer = [i, j];
            }
        }
    }
    
    routes.forEach(route => {
        const [dir, dis] = route.split(' ');
        const distance = Number(dis);
        const [y, x] = answer;

        if(isValid(dir, distance, n, m, y, x, park)) {
            const [ny, nx] = move(dir, distance, y, x);
            answer = [ny, nx];
            console.log(answer)
        }
    });
    return answer;
}