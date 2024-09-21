function solution(name, yearning, photo) {
    var answer = [];
    const map = new Map();
    
    name.forEach((e, i) => {
        map.set(e, yearning[i]);
    })
    
    for(let i = 0; i < photo.length; i++){
        let temp = 0;
        for(let j = 0; j < photo[i].length; j++){
            if(map.has(photo[i][j])){
                temp += map.get(photo[i][j]);
            }
        }
        answer.push(temp);
    }
    return answer;
}