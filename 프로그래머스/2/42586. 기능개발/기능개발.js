function solution(progresses, speeds) {
    let arr = [];
    let answer = [];
    let days = [];
    
    for(let i = 0; i < progresses.length; i++){
        let count = 0;
        while(progresses[i] < 100){
            progresses[i] += speeds[i];
            count += 1;
        }
        arr.push(count);
    }

    let current = arr[0];
    let count = 1; 
    for(let i = 1; i <= arr.length; i++){
        if(arr[i] <= current){
            count += 1;
        }
        else{
            answer.push(count);
            current = arr[i];
            count = 1;
        }
    }
    return answer;
}