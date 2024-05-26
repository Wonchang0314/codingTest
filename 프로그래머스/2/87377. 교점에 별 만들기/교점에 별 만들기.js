function findLength(arr){
    let maxY = arr[0][1];
    let minY = arr[0][1];
    let maxX = arr[0][0];
    let minX = arr[0][0];
    arr.forEach(line => {
        maxX = Math.max(line[0], maxX);
        minX = Math.min(line[0], minX);
        maxY = Math.max(line[1], maxY);
        minY = Math.min(line[1], minY);
    })
    return [maxX, maxY, minX, minY];
}
function solution(line) {
    var temp = [];
    for(let i = 0; i < line.length; i++){
        let a = line[i];
        for(let j = 0; j < line.length; j++){
            let b = line[j];
            if((a[0] * b[1]) - (a[1] * b[0]) === 0) continue;
            else{
                let x = (a[1] * b[2] - a[2] * b[1]) / (a[0] * b[1] - a[1] * b[0]);
                let y = (a[2] * b[0] - a[0] * b[2]) / (a[0] * b[1] - a[1] * b[0]);
                if(Number.isInteger(x) && Number.isInteger(y)){
                    if(x === -0) x = Math.abs(x);
                    if(y === -0) y = Math.abs(y);
                    temp.push([x, y]);   
                }
            }
        }
    }
    let lineSet = new Set(temp.map(line => JSON.stringify(line)));
    temp = Array.from(lineSet).map(line => JSON.parse(line));
    let len = findLength(temp);
    let width = len[0] - len[2] + 1;
    let height = len[1] - len[3] + 1;
    let result = Array.from({ length: height }, () => new Array(width).fill('.'));
    temp.forEach((line) => {
        let x = line[0] - len[2];
        let y = len[1] - line[1];
        result[y][x] = '*';
    })
    result = result.map(row => row.join(''));
    console.log(result);
    return result;
}