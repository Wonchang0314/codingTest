function solution(numbers, hand) {
    var answer = '';
    let num = 1;
    let keyPad = new Map();
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 3; j++){
            if(num === 10){
                keyPad.set('*', [i, j]);
                num += 1;
            }
            else if(num === 11){
                keyPad.set(0, [i, j]);
                num += 1;
            }
            else if(num === 12){
                keyPad.set('#', [i, j]);
                num += 1;
            }
            else {
                keyPad.set(num, [i, j]);
                num += 1;
            }
        }
    }
    let left = '*';
    let right = '#';
    numbers.forEach(current => {
        let [xl1, yl1] = keyPad.get(left);
        let [x2, y2] = keyPad.get(current);
        let [xr1, yr1] = keyPad.get(right);
        let fromLeft = Math.abs(x2 - xl1) + Math.abs(y2 - yl1); 
        let fromRight = Math.abs(x2 - xr1) + Math.abs(y2 - yr1); 
        if ([1, 4, 7].includes(current)) {
            answer += 'L';
            left = current;
        } else if ([3, 6, 9].includes(current)) {
            answer += 'R';
            right = current;
        }
        else if(fromLeft < fromRight) {
            left = current;
            answer += 'L'
        }
        else if(fromLeft > fromRight) {
            right = current;
            answer += 'R';
        } 
        else{
            if(hand === 'right') {
                right = current;
                answer += 'R';
            }
            else {
                left = current;
                answer += 'L';
            }
        }
    })
    return answer;
}