const intersect = (a, b) => {
    let result = [];
    let temp1 = a.filter(e => b.includes(e));
    let temp2 = b.filter(e => a.includes(e));
    let temp = new Set(temp1.concat(temp2));
    for(let element of temp){
        let count1 = a.filter(e => e === element);
        let count2 = b.filter(e => e === element);
        let len = Math.min(count1.length, count2.length);
        for(let j = 0; j < len; j++){
            result.push(element);
        }
    }
    return result;
}
const union = (a, b) => {
    let result = [];
    let temp = new Set(a.concat(b));
    for(let element of temp){
        let count1 = a.filter(e => e === element);
        let count2 = b.filter(e => e === element);
        let len = Math.max(count1.length, count2.length);
        for(let j = 0; j < len; j++) {
            result.push(element);
        }
    }
    return result;
}
function solution(str1, str2) {
    var answer = 0;
    const regex = /[A-Z]/;
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    
    let arr1 = [];
    let arr2 = [];
    
    for(let i = 0; i < str1.length - 1; i++){
        if(regex.test(str1[i]) && regex.test(str1[i+1])) arr1.push(str1[i] + str1[i+1])
    }
    for(let i = 0; i < str2.length - 1; i++){
        if(regex.test(str2[i]) && regex.test(str2[i+1])) arr2.push(str2[i] + str2[i+1]);
    }
    
    let i = intersect(arr1, arr2);
    let u = union(arr1, arr2);
    let j = i.length / u.length;
    if(u.length === 0) j = 1;
    answer = Math.floor(j * 65536);
    return answer;
}