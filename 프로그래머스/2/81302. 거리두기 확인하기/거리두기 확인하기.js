function solution(places) {
    var answer = [1, 1, 1, 1, 1];
    let direction1 = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let direction2 = [[0, 2], [2, 0], [0, -2], [-2, 0]]
    let cross = [[1, 1], [-1, 1], [1, 0], [-1, -1]];
    let checkX = [[[0, 1], [1, 0]], [[-1, 0], [0, 1]], [[0, -1], [1, 0]], [[-1, 0], [0, -1]]];
    
    const socialDistance = (x, y, place) => {
        for(let i = 0; i < direction1.length; i++){
            let nx = x + direction1[i][0];
            let ny = y + direction1[i][1];
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                if (place[nx][ny] === 'P') {
                    return false;
                }
            }
        }
        for (let i = 0; i < direction2.length; i++) {
            let nx = x + direction2[i][0];
            let ny = y + direction2[i][1];
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                if (place[nx][ny] === 'P') {
                    let mx = x + direction1[i][0];
                    let my = y + direction1[i][1];
                    if (place[mx][my] !== 'X') {
                        return false;
                    }
                }
            }
        }
        for (let i = 0; i < cross.length; i++) {
            let nx = x + cross[i][0];
            let ny = y + cross[i][1];
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                if (place[nx][ny] === 'P') {
                    let check1 = x + checkX[i][0][0];
                    let check2 = y + checkX[i][0][1];
                    let check3 = x + checkX[i][1][0];
                    let check4 = y + checkX[i][1][1];
                    if (place[check1][check2] !== 'X' || place[check3][check4] !== 'X') {
                        return false;
                    }
                }
            }
        }
        
        return true;
    }
    places.forEach((place, index) => {
        for(let i = 0; i < place.length; i++){
            for(let j = 0; j < place[i].length; j++){
                if(place[i][j] === 'P'){
                    if(!socialDistance(i, j, place)) {
                        answer[index] = 0;
                        break;
                    }  
                }
            }
            if (answer[index] === 0) {
                break;
            }
        }
    })
    return answer;
}