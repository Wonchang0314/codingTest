function solution(s) {
    let arr = s.split(' ');
    let min = arr[0];
    let max = arr[0];
    arr.forEach(i => {
        if(Number(i) < Number(min)){
            min = i
        }
        if(Number(i) > Number(max)){
            max = i
        }
    })
    return min + " "+ max
}