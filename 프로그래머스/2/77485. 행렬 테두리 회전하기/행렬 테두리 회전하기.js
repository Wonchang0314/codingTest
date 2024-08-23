function rotateMatrix(matrix, x1, y1, x2, y2) {
    const subMatrix = new Set();
    let temp = matrix[x1][y1];  // 좌상단 값을 임시 저장

    // 왼쪽 열 위로 이동
    for (let r = x1; r < x2; r++) {
        matrix[r][y1] = matrix[r + 1][y1];
        subMatrix.add(matrix[r][y1]);
    }

    // 하단 행 왼쪽으로 이동
    for (let c = y1; c < y2; c++) {
        matrix[x2][c] = matrix[x2][c + 1];
        subMatrix.add(matrix[x2][c]);
    }

    // 오른쪽 열 아래로 이동
    for (let r = x2; r > x1; r--) {
        matrix[r][y2] = matrix[r - 1][y2];
        subMatrix.add(matrix[r][y2]);
    }

    // 상단 행 오른쪽으로 이동
    for (let c = y2; c > y1; c--) {
        matrix[x1][c] = matrix[x1][c - 1];
        subMatrix.add(matrix[x1][c]);
    }
    
    // 마지막으로 임시 저장한 값을 좌상단에 넣음
    matrix[x1][y1 + 1] = temp;
    subMatrix.add(matrix[x1][y1 + 1]);

    return [matrix, subMatrix];
}
const findSmallest = (subMatrix) => {
    const temp = Array.from(subMatrix);
    return Math.min(...temp);
}
function solution(rows, columns, queries) {
    var answer = [];
    let matrix = Array.from({ length: rows }, () => Array(columns).fill(0));
    let count = 1;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            matrix[i][j] = count;
            count += 1;
        }
    }
    queries.forEach(query => {
        const temp = rotateMatrix(matrix, query[0]-1, query[1]-1, query[2]-1, query[3]-1);
        matrix = temp[0];
        const subMatrix = temp[1];
        const smallest = findSmallest(subMatrix);
        answer.push(smallest);
    })
    
    return answer;
}