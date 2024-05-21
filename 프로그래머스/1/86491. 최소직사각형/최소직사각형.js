function solution(sizes) {
    var answer = 0;
    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
        maxWidth = Math.max(maxWidth, Math.max(sizes[i][0], sizes[i][1]));
        maxHeight = Math.max(maxHeight, Math.min(sizes[i][0], sizes[i][1]));
    }
    answer = maxWidth * maxHeight
    return answer;
}