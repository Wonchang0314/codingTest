function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let reportCount = new Map();
    let reportWho = new Map();
    
    let uniqueReport = new Set(report);

    uniqueReport.forEach((rep) => {
        let [reporter, reportee] = rep.split(' ');

        if (reportCount.has(reportee)) {
            reportCount.set(reportee, reportCount.get(reportee) + 1);
        } else {
            reportCount.set(reportee, 1);
        }
        
        if (reportWho.has(reporter)) {
            reportWho.get(reporter).add(reportee);
        } else {
            reportWho.set(reporter, new Set([reportee]));
        }
    });
    
    id_list.forEach((user, index) => {
        if (reportWho.has(user)) {
            reportWho.get(user).forEach((reportee) => {
                if (reportCount.get(reportee) >= k) {
                    answer[index]++;
                }
            });
        }
    });
    return answer;
}