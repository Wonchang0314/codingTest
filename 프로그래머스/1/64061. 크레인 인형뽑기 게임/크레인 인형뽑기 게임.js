class Bucket {
    constructor(){
        this.arr = [];
        this.count = 0;
    }
    insert(doll){
        this.arr.push(doll);
        if(this.arr.length >= 2){
            if(this.arr[this.arr.length-1] === this.arr[this.arr.length - 2]){
                this.arr.pop();
                this.arr.pop();
                this.count += 2;
            }
        }
    }
}
function solution(board, moves) {
    var answer = 0;
    let bucket = new Bucket();
    for(let i = 0; i < moves.length; i++){
        for(let j = 0; j < board.length; j++){
            let current = board[j][moves[i] - 1];
            if(current > 0){
                bucket.insert(current);
                board[j][moves[i] - 1] = 0;
                break;
            }
        }
    }
    console.log(bucket)
    return bucket.count;
}