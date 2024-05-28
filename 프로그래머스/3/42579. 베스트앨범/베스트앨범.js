function solution(genres, plays) {
    let answer = [];
    let playList = new Map();
    for(let i = 0; i < genres.length; i++){
        let genre = genres[i];
        let play = plays[i];
        if(playList.has(genre)){
            playList.get(genre).push([i, play]);
            
        }
        else{
            playList.set(genre, [[i, play]]);
        }
    }
    let playArr = Array.from(playList);
    playArr.sort((a, b) => {
        let sumA = a[1].reduce((sum, song) => sum + song[1], 0);
        let sumB = b[1].reduce((sum, song) => sum + song[1], 0);
        return sumB - sumA
    })
    playArr.forEach((arr) => {
        arr[1].sort((a, b) => b[1] - a[1]);
    })
    
    playArr.forEach(arr => {
        for(let i = 0; i < Math.min(2, arr[1].length); i++){
            answer.push(arr[1][i][0]);
        }
    })
    return answer;
}