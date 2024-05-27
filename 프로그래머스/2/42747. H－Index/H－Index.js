function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => b - a);
    let hIndex = 0;
    for(let i = 0; i < citations.length; i++){
        if(i + 1 <= citations[i]){
            hIndex += 1;
        }
        else{
            break;
        }
    }
    
    return hIndex;
}