function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i < B.length; i++) {
        if (B[i] > A[j]) {
            answer++;
            j++;
        }
    }
    return answer;
}