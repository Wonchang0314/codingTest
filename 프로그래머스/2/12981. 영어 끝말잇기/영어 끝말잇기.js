function solution(n, words) {
    let answer = [0, 0];
    let wordSet = new Set();
    let prev = words[0];
    wordSet.add(prev);
    
    
    for(let i = 1; i < words.length; i++){
        let current = words[i];
        if(wordSet.has(current) || prev.charAt(prev.length - 1) !== current.charAt(0)){
            let turn = Math.floor(i / n) + 1;
            let player = (i % n) + 1;
            return [player, turn];
        }
        wordSet.add(current);
        prev = current;
    }
    
    return answer;
}