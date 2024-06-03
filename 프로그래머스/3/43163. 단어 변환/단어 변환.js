function isOneLetterDifferent(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diffCount++;
        }
        if (diffCount > 1) {
            return false;
        }
    }
    return diffCount === 1;
}
function recursion(current, target, words, visited, count, minCount){
    if(target === current){
        return Math.min(count, minCount);
    }
    for(let i = 0; i < words.length; i++){
        if(visited[i] !== true && isOneLetterDifferent(current, words[i])){
            visited[i] = true;
            minCount = recursion(words[i], target, words, visited, count + 1, minCount);
            visited[i] = false;
        }
    }
    return minCount;
}
function solution(begin, target, words) {
    var answer = 0;
    let visited = new Array(words.length).fill(false);
    
    let minCount = Infinity;

    minCount = recursion(begin, target, words, visited, 0, minCount);
    
    return minCount === Infinity ? 0 : minCount;
}