const timeToMin = (time) => {
    return Number(String(time).slice(0, -2)) * 60 + Number(String(time).slice(-2))
}

const solution = (schedules, timelogs, startday) => {
    const onTime = timelogs.filter((log, logIdx) => {
        return log.filter((time, timeIdx) => {
            if((timeIdx + startday) % 7 === 6 || ((timeIdx + startday) % 7 === 0)) return true;
            return timeToMin(time) <= timeToMin(schedules[logIdx]) + 10
        }).length === 7
    }).length
    
    return onTime;   
}