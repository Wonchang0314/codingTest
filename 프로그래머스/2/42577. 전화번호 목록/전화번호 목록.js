function solution(phone_book) {
    let answer = true;
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++){
        let current = phone_book[i];
        let next = phone_book[i + 1];
        if(next.startsWith(current)) return false;
    }
    return answer;
}