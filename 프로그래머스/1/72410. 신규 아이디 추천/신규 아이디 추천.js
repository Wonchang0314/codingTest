function check (id){
    if(id[0] === "." || id[id.length - 1] === "."){
        return false
    }
    for(let i = 0; i < id.length; i++){
        if(id[i] === "." && id[i+1] === "."){
            return false;
        }
    }
    return true;
}
function remove(id){
    let result = "";
    const regex = /^[a-z0-9._-]+$/;
    for(let i = 0; i < id.length; i++){
        if(regex.test(id[i])){
            result += id[i]
        }
    }
    return result;
}
function insertA(id){
    if(id.length === 0){
        id += 'a'    
    }
    return id;
}
function insert(id){
    while(id.length < 3){
        id += id[id.length - 1];
    }
    return id;
}
function solution(new_id) {
    var answer = '';
    const regex = /^[a-z0-9._-]+$/;
    if(new_id.length >= 3 && new_id.length <= 15 && regex.test(new_id) && check(new_id)){
        return new_id;
    }
    let firstStep = new_id.toLowerCase();
    let secondStep = remove(firstStep);
    let third = secondStep.replace(/\.{2,}/g, '.');        
    let fourth = third.replace(/^\.+|\.+$/g, '');
    let fivth = insertA(fourth);
    let six = fivth.slice(0, 15);
    six = six.replace(/^\.+|\.+$/g, '');
    answer = insert(six);
    answer.replace(/^\.+|\.+$/g, '');

    return answer;
}