function solution(wallpaper) {
    var answer = [];
    let minRow = Infinity, minCol = Infinity;
    let maxRow = -Infinity, maxCol = -Infinity;
    
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                if(i < minRow) minRow = i;
                if(j < minCol) minCol = j;
                if(i > maxRow) maxRow = i;
                if(j > maxCol) maxCol = j;
            }
        }
    }
    answer = [minRow, minCol, maxRow + 1, maxCol + 1];
    return answer;
}