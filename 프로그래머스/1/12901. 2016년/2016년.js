function solution(a, b) {
    var answer = 'FRI';
    let month = 1;
    let day = 1;
    let week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   
    let totalDays = b - 1; 
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysInMonth[i];
    }
    
    let index = (totalDays + 4) % 7;
    answer = week[index];
    
    return answer;
}