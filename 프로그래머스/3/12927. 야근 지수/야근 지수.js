function solution(n, works) {
    var answer = 0;
    works.sort((a, b) => b - a);
    while(n > 0){
        works[0] -= 1;
        n -= 1;
        let i = 0;
        while(i < works.length - 1 && works[i] < works[i + 1]){
            let temp = works[i];
            works[i] = works[i + 1];
            works[i + 1] = temp;
            i++;
        }
    }
    works.forEach(work => answer += Math.pow(work, 2));
    works.forEach(work => {
        if(work < 0) answer = 0;
    })
    return answer;
}