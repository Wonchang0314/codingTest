
function solution(n, arr1, arr2) {
    let answer = [];
    const arr1Binary = arr1.map(num => num.toString(2).padStart(n, '0'));
    const arr2Binary = arr2.map(num => num.toString(2).padStart(n, '0'));
    let input = "";
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(arr1Binary[i].charAt(j) === "0" && arr2Binary[i].charAt(j) === "0"){
                input += " ";
            }
            else{
                input += "#";
            }
        }
        answer.push(input);
        input = "";
    }
    return answer;
}