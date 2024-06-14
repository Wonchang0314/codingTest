function solution(survey, choices) {
    var answer = '';
    let type = new Map()
    type.set('R', 0);
    type.set('T', 0);
    type.set('C', 0);
    type.set('F', 0);
    type.set('J', 0);
    type.set('M', 0);
    type.set('A', 0);
    type.set('N', 0);
    
    for(let i = 0; i < survey.length; i++){
        if(choices[i] === 1) type.set(survey[i][0], type.get(survey[i][0]) + 3);
        else if(choices[i] === 2) type.set(survey[i][0], type.get(survey[i][0]) + 2);
        else if(choices[i] === 3) type.set(survey[i][0], type.get(survey[i][0]) + 1);
        else if(choices[i] === 5) type.set(survey[i][1], type.get(survey[i][1]) + 1);
        else if(choices[i] === 6) type.set(survey[i][1], type.get(survey[i][1]) + 2);
        else if(choices[i] === 7) type.set(survey[i][1], type.get(survey[i][1]) + 3);
    }

    let arr = Array.from(type);
    
    for(let i = 0; i < arr.length; i+=2){
        if(arr[i][1] < arr[i + 1][1]) answer += arr[i + 1][0];
        else if(arr[i][1] > arr[i + 1][1]) answer += arr[i][0];
        else answer += arr[i][0];
    }
    return answer;
}