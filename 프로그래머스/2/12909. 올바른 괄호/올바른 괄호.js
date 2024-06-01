function solution(s){
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '{' && arr[arr.length - 1] === '('){
            arr.push(s[i]);
        }
        else if(s[i] === '[' && arr[arr.length - 1] === '{'){
            arr.push(s[i]);
        }
        else if(s[i] === '('){
            arr.push(s[i]);
        }
        else{
            if(arr.length === 0){
                return false;
            }
            else{
                arr.pop();
            }
        }
    }
    if(arr.length >= 1){
        return false;
    }
    return true;
}