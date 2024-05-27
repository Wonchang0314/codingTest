function solution(n) {
    const triangle = Array(n).fill().map((_, i) => Array(i + 1).fill());
    let remain = n;
    let current = 1;
    
    function fillTriangle(x, y, size) {
        if (size <= 0) return;
        
        for(let i = 0; i < size; i++){
            triangle[i + x][y] = current++;
        }
        for(let i = 1; i < size; i++){
            triangle[x + size - 1][y + i] = current++;
        }
        for(let i = 1; i < size - 1; i++){
            triangle[x + size - 1 - i][y + size - 1 - i] = current++;
        }
        
        fillTriangle(x + 2, y + 1, size - 3);
    }
    fillTriangle(0, 0, n);
    let answer = triangle.flat();
    return answer;
}