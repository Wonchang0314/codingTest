function solution(phone_book) {
    let answer = true;
    let phoneMap = new Map();

    for (let phone of phone_book) {
        phoneMap.set(phone, true);
    }

    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            let prefix = phone.substring(0, i);
            if (phoneMap.has(prefix)) {
                return false;
            }
        }
    }
    return answer;
}