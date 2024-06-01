function solution(strings, n) {
    let answer = [...strings];
    answer.sort((a, b) => {
        if(a[n] === b[n]){
            return a.localeCompare(b);
        }
        return a[n].charCodeAt(0) - b[n].charCodeAt(0);
    });
    return answer;
}